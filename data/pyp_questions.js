// Function to convert LaTeX to plain text
const latexToPlainText = (text) => {
  if (!text) return '';
  
  return text
    // Remove dollar signs first
    .replace(/\$/g, '')
    // Fractions: \frac{a}{b} -> (a/b)
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1/$2)')
    // Square roots: \sqrt{x} -> √(x)
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    // Superscripts: x^2 or x^{2} -> x²
    .replace(/\^(\d)/g, (match, p1) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[p1] || `^${p1}`)
    .replace(/\^\{([^}]+)\}/g, '^($1)')
    .replace(/\^-/g, '⁻')
    // Subscripts: x_2 -> x₂
    .replace(/_(\d)/g, (match, p1) => '₀₁₂₃₄₅₆₇₈₉'[p1] || `_${p1}`)
    .replace(/_{([^}]+)}/g, '_($1)')
    // Greek letters
    .replace(/\\pi/g, 'π')
    .replace(/\\theta/g, 'θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\delta/g, 'δ')
    // Math operators
    .replace(/\\times/g, '×')
    .replace(/\\div/g, '÷')
    .replace(/\\pm/g, '±')
    .replace(/\\leq/g, '≤')
    .replace(/\\geq/g, '≥')
    .replace(/\\neq/g, '≠')
    .replace(/\\approx/g, '≈')
    // Trigonometric functions
    .replace(/\\sin/g, 'sin')
    .replace(/\\cos/g, 'cos')
    .replace(/\\tan/g, 'tan')
    .replace(/\\sec/g, 'sec')
    .replace(/\\cot/g, 'cot')
    .replace(/\\csc/g, 'csc')
    // Logarithms
    .replace(/\\log_\{?(\w+)\}?\s*\(?([^)]+)\)?/g, 'log_$1($2)')
    .replace(/\\log/g, 'log')
    .replace(/\\ln/g, 'ln')
    // Exponential
    .replace(/\\exp/g, 'exp')
    .replace(/e\^\{([^}]+)\}/g, 'e^($1)')
    // Derivatives and integrals
    .replace(/\\frac\{d\}\{dx\}/g, 'd/dx')
    .replace(/\\frac\{dr\}\{dt\}/g, 'dr/dt')
    .replace(/\\int/g, '∫')
    .replace(/\\mathrm\{d\}/g, 'd')
    // Text commands
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\mathrm\{([^}]+)\}/g, '$1')
    // Degree symbol
    .replace(/\\degree/g, '°')
    // Parentheses
    .replace(/\\left\(/g, '(')
    .replace(/\\right\)/g, ')')
    .replace(/\\left\[/g, '[')
    .replace(/\\right\]/g, ']')
    // Commas with proper spacing
    .replace(/\\,/g, ' ')
    // Clean up extra spaces
    .replace(/\s+/g, ' ')
    .trim();
}

const pyp_questions_raw = [
    {
        question: "Find the value of the constant $c$ such that the line $y=2x+c$ is a tangent to the curve $y=x^2+3x+1$.",
        answer: "$c=\\frac{3}{4}$",
    },
    {
        question: "Express $\\frac{18+11x-2x^2}{(x-1)(x+2)^2}$ in partial fractions.",
        answer: "$\\frac{3}{x-1}-\\frac{5}{x+2}+\\frac{4}{(x+2)^2}$",
    },
    {
        question: "a) Find $\\frac{d}{dx}(xe^{-2x})$.\n b) Hence find $\\int xe^{-2x}\,\\mathrm{d}x$.",
        answer: "a) $-2xe^{-2x}+e^{-2x}$\n b) $-\\frac{1}{2}xe^{-2x}-\\frac{1}{4}e^{-2x}+c$",
    },
    {
        question: "Solve the equation $\\frac{\\cos x + 4\\sin x}{2\\cos x + \\sin x} = \\cot x$ for $-\\frac{\\pi}{2} \\leq x \\leq \\frac{\\pi}{2}$.",
        answer: "0.615, $-0.615$",
    },
    {
        question: "The function f is given by f$(x) = \\frac{ax^2}{x-a}$, for $x>a$, where $a$ is a positive constant.\n a) Find f’$(x)$.\n The function g, defined for $x>a$, has the property that g’$(x) = (x-a)^2$f’$(x)$. g decreases for $a<x<8$.\n b) Find the value of $a$.",
        answer: "a) $\\frac{ax^2-2a^2x}{(x-a)^2}$\n b) $a=4$",
    },
    {
        question: "Find the set of values of the constant $k$ for which the curve $y=kx^2+4x+k-3$ lies completely below the $x$-axis.",
        answer: "$k<-1$",
    },
    {
        question: "The line $y-2x=12$ intersects the curve $x^2-xy+y^2=63$ at two points. Find the coordinates of these two points.",
        answer: "$(-3,\,6),\,(-9,\,-6)$",
    },
    {
        question: "A circle, with centre $C$, has equation $x^2+y^2+10x-24y=0$.\n a) Find the coordinates of $C$ and the radius of the circle.\n b) Find the coordinates of the points at which the circle intersects the $y$-axis.\n The point $X$ is on the line which passes through $C$ and the origin $O$. It is given that the distance $CX$ is three times the distance $OC$.\n c) Find the coordinates of the possible positions of $X$.",
        answer: "a) centre: $(-5,\,12)$ and radius = 13\n b) $(0,\,24),\,(0,\,0)$\n c) $(-20,\,48),\, (10,\,-24)$",
    },
    {
        question: "A circular patch of water of negligible thickness is expanding on a thin piece of paper. At time $t$ seconds the rate of change of the radius, $r$ cm, of the patch is given by $\\frac{dr}{dt} = \\frac{k}{2t+1}$ cm/s, where $k$ is a constant. Initially the radius of the patch is 1 cm and the radius is increasing at a rate of 0.5 cm/s.\n a) Show that $k=0.5$.\n b) Find an expression for $r$ in terms of $t$.\n c) Hence find the rate of increase of the area of the patch after the patch has been expanding for 3 seconds.",
        answer: "a) $k=0.5$\n b) $r=\\frac{1}{4}\\ln (2t+1)+1$\n c) 0.667$\\text{cm}^2$/s",
    },
    {
        question: "A ball is thrown vertically upwards. Its height, $h$ m, above the ground at time $t$ seconds after being thrown is given by the formula $h=1.75+5t-5t^2$. a) State the height above the ground from which the ball is thrown.\n b) Express $h$ in the form $a+b(t+c)^2$ where $a,\,b$ and $c$ are constants to be determined.\n c) Hence state the maximum height attained by the ball and the time at which this occurs.\n d) The ball hits the ground. Explain why the time taken for the ball to hit the ground is not twice the time found in part (c).\n e) Find the length of time for which the ball is at least 2 m above the ground.",
        answer: "a) 1.75 m\n b) $3-5(t-0.5)^2$\n c) maximum height = 3 m, time = 0.5 seconds\n d) 1.75 m\n e) 0.894 s",
    },
    {
        question: "The perpendicular bisector of the line joining the points $A(2,\,h)$ and $B(-8,\,-7)$ passes through the point $X(h,\,-\\frac{13}{2})$, where $h$ is a constant.\n a) Express the gradient of the perpendicular bisector of the line $AB$ in terms of $h$.\n b) Hence find the possible values of $h$.",
        answer: "a) $\\frac{10}{-7-h}$\n b) $h=-2,\,h=9$",
    },
    {
        question: "The coefficient of $x^3$ in the expansion of $(k+2x)(2-\frac{1}{2}x)^6$ is zero. Find the value of constant $k$.",
        answer: "$k=6$",
    },
    {
        question: "Tea is poured into an empty cup. The temperature, $T_c\,\\degree$C, of the tea in the cup, $t$ minutes after it is poured, is modelled by the formula $T_c=86e^{-0.06t}$. a) State the initial temperature of the tea.\n b) Find the time taken for the temperature of the tea to drop to 37$\degree$C.\n c) Some tea is poured into an empty cup and at the same time the same volume of tea is poured into an empty flask. The temperature, $T_f\,\\degree$C, of the tea in the flask at time $t$ minutes after it is poured into the flask is modelled by $T_f=86e^{-xt}$ where $x$ is a constant. The formula for $T_c$ still applies.\n i) After one hour the temperature of the tea in the flask is 82$\\degree$C. Find $x$.\n ii) Using your answer from part (c)(i) find the time when the temperature of the tea in the cup is half the temperature of the tea in the flask.",
        answer: "a) $86\\degree$C\n b) 14.1 minutes\n c)i) 0.000794\n ii) 11.7 minutes",
    },
];

// Convert all questions and answers to plain text
const pyp_questions = pyp_questions_raw.map(item => ({
    question: latexToPlainText(item.question),
    answer: latexToPlainText(item.answer),
    // Keep original LaTeX versions if needed for API
    questionLatex: item.question,
    answerLatex: item.answer
}));

module.exports = pyp_questions;

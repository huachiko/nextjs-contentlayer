// convert LaTeX to plain text
const latexToPlainText = (text) => {
  if (!text) return '';
  
  return text
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)') // square root
    .replace(/\\pi/g, 'π') // pi (3.14)
    .replace(/\\alpha/g, 'α') // alpha
    .replace(/\\times/g, '×') // multiplication
    .replace(/\\pm/g, '±') // plus-minus
    .replace(/\\leq/g, '≤') // less than and equal to
    .replace(/\\approx/g, '≈') // approximately
    .replace(/\\int/g, '∫') // integral
    .replace(/[^\S\n]+/g, ' ') // remove extra spaces
}

const pyp_questions_raw = [
    {
        question: `Find the value of the constant c such that the line y = 2x + c is a tangent to the curve y = x² + 3x + 1.`,
        answer: `c = 3/4`,
        solution: `y = 2x + c --(1) 
        y = x² + 3x + 1 --(2)
        
        Substitue (1) into (2),
        2x + c = x² + 3x + 1
        0 = x² + x + 1 - c
        
        b² - 4ac = (1)² - 4(1)(1-c) = -3 + 4c
        
        Since line is tangent to curve,
        b² - 4ac = 0
        -3 + 4c = 0
        4c = 3
        c = 3/4`,
    },
    {
        question: `Express (18 + 11x - 2x²)/(x - 1)(x + 2)² in partial fractions.`,
        answer: `3/(x - 1) - 5/(x + 2) + 4/(x + 2)²`,
        solution: `(18 + 11x - 2x²)/(x - 1)(x + 2)² = A/(x - 1) + B/(x + 2) + C/(x + 2)² = (A(x+ 2)² + B(x - 1)(x + 2) + C(x - 1))/(x - 1)(x + 2)²
        18 + 11x - 2x² = A(x + 2)² + B(x - 1)(x + 2) + C(x - 1)
        
        Let x = -2,
        18 + 11(-2) - 2(-2)² = A(0) + B(-3)(0) + C(-3)
        -12 = 0 + 0 -3C
        -12 = 3 C
        C = 4
        18 + 11x - 2x² = A(x + 2)² + B(x - 1)(x + 2) + 4(x - 1)
        
        Let x = 1,
        18 + 11(1) - 2(1)² = A(3)² + B(0)(3) + 4(0)
        27 = A(9) + 0 + 0
        27 = 9(A)
        A = 3
        18 + 11x - 2x² = 3(x + 2)² + B(x - 1)(x + 2) + 4(x - 1)
        
        Let x = 0,
        18 + 0 - 0 = 3(2)² + B(-1)(2) + 4 (-1)
        18 = 12 - 2B - 4
        2B = 12 - 4 - 18 = -10
        B = -5
        
        (18 + 11x - 2x²)/(x - 1)(x + 2)² = 3/(x - 1) - 5(x + 2) + 4/(x + 2)²`,
    },
    {
        question: `a) Find d/dx(xe⁻²ˣ).
        b) Hence find \\int xe⁻²ˣ dx.`,
        answer: `a) -2xe⁻²ˣ + e⁻²ˣ
        b) -1/2(xe⁻²ˣ) - 1/4(e⁻²ˣ) + c`,
        solution: `a) u = x
        du/dx = 1
        v = e⁻²ˣ
        dv/dx = -2e⁻²ˣ

        d/dx(xe⁻²ˣ) = x(-2e⁻²ˣ)+(e⁻²ˣ)(1) = -2xe⁻²ˣ + e⁻²ˣ
        
        b) From (a), d/dx(xe⁻²ˣ) = -2xe⁻²ˣ + e⁻²ˣ
        \\int -2xe⁻²ˣ + e⁻²ˣ dx = xe⁻²ˣ
        \\int -2xe⁻²ˣ dx + \\int e⁻²ˣ dx = xe⁻²ˣ
        \\int -2xe⁻²ˣ dx = xe⁻²ˣ - \\int e⁻²ˣ dx
        \\int -2xe⁻²ˣ = xe⁻²ˣ - (e⁻²ˣ)/-2
        -2\\int xe⁻²ˣ dx = xe⁻²ˣ + 1/2(e⁻²ˣ)
        \\int xe⁻²ˣ dx = -1/2(xe⁻²ˣ + 1/2(e⁻²ˣ)) = -1/2xe⁻²ˣ - 1/4e⁻²ˣ + c`,
    },
    {
        question: `Solve the equation (cosx + 4sinx)/(2cosx + sinx) = cotx for -\\pi/2 \\leq x \\leq \\pi/2.`,
        answer: `0.615, -0.615`,
        solution: `(cosx + 4sinx)/(2cosx + sinx) = cotx
        (cosx + 4sinx)/(2cosx + sinx) = cosx/sinx
        sinx(cosx + 4sinx) = cosx(2cosx + sinx)
        sinx(cosx) + 4sin²x = 2cos²x + sinx(cosx)
        4sin²x = 2cos²x
        2sin²x = cos²x
        (2sin²x)/cos²x = 1
        2tan²x = 1
        tan²x = 1/2
        tanx = \\pm\\sqrt{1/2}
        
        Since -\\pi/2 \\leq x \\leq \\pi/2, only 1st and 4th quadrant
        basic angle \\alpha = tan⁻¹\\sqrt{1/2} = 0.61548
        x = 0.61548, 2\\pi - 0.61548 = 0.61548, 5.6677 (NA), 5.6677 - 2\\pi 
        x = 0.61548, -0.61547 \\approx 0.615, -0.615`,
    },
    {
        question: `The function f is given by f(x) = (ax²)/(x - a), for x > a, where a is a positive constant.
        a) Find f’(x).
        The function g, defined for x > a, has the property that g’(x) = (x-a)²f’(x). g decreases for a < x < 8.
        b) Find the value of a.`,
        answer: `a) (ax² - 2a²ˣ)/(x - a)²
        b) a = 4`,
        solution: `a) u = ax²
        du/dx = 2ax
        v = x - a
        dv/dx = 1
        
        f'(x) = ((x - a)(2ax) - (ax²)(1))/(x - a)² = (2ax² - 2a²x - ax²)/(x - a)²
        x = (ax² - 2a²ˣ)/(x - a)²
        
        b) g'(x) = (x - a)²f'(x) = (x - a)²[(ax² - 2a²ˣ)/(x - a)²]
        For decreasing function, g'(x) < 0
        ax² - 2 a²x < 0
        ax(x - 2a) < 0
        x(x - 2a) < 0/a
        x(x - 2a) < 0
        
        0 < x < 2a
        
        Since a > 0 and x > a,
        a < x < 2a
        
        Comparing with a < x < 8,
        2a = 8
        a = 4`,
    },
    {
        question: `Find the set of values of the constant k for which the curve y = kx² + 4x + k - 3 lies completely below the x-axis.`,
        answer: `k < -1`,
        solution: `For the curve to lie completely below x-axis, curve is maximum curve
        k < 0 and b² - 4ac < 0
        
        b² - 4ac = 4² - 4(k)(k - 3) = 16 - 4k(k - 3) = -4k² + 12k + 16
        
        b² - 4ac < 0
        -4k² + 12k + 16 < 0
        -4(k² - 3k - 4) < 0
        k² - 3k - 4 > 0/(-4)
        k² - 3k - 4 > 0
        (k + 1)(k - 4) > 0
        
        k < -1 or k > 4
        To satisfy k < 0, k < -1`,
    },
    {
        question: `The line y - 2x = 12 intersects the curve x² - xy + y² = 63 at two points. Find the coordinates of these two points.`,
        answer: `(-3, 6), (-9, -6)`,
        solution: `y - 2x = 12
        y = 2x + 12 --(1)
        x² - xy + y² = 63 --(2)
        
        Substitute (1) into (2),
        x² - x(2x + 12) + (2x + 12)² = 63
        x² - 2x² - 12x + (2x)² + 2(2x)(12) + (12)² = 63
        x² - 2x² - 12x + 4x² + 48x + 144 = 63
        3x² + 36x + 144 = 63
        3x² + 36x + 81 = 0
        x² + 12x + 27 = 0
        (x + 3)(x + 9) = 0
        x + 3 = 0 or x + 9 = 0
        x = -3 or x = -9
        
        Substitute x = -3 into (1),
        y = 2(-3) + 12 = 6
        (-3, 6)
        
        Substitute x = -9 into (1),
        y = 2(-9) + 12 = -6
        (-9, -6)`,
    },
    {
        question: `A circle, with centre C, has equation x² + y² + 10x - 24y = 0.
        a) Find the coordinates of C and the radius of the circle.
        b) Find the coordinates of the points at which the circle intersects the y-axis.`,
        answer: `a) centre: (-5, 12) and radius = 13
        b) (0, 24), (0, 0)`,
        solution: `a) x² + y² + 10x - 24y = 0
        2g = 10, 2f = -24, c = 0
        g = 5, f = -12
        Centre: (-5, 12)
        Radius = \\sqrt{g² + f² - c} = \\sqrt{5² + (-12)² - 0} = 13 units
        
        b) (x + 5)² + (y - 12)² = 13²
        Let x = 0,
        5² + (y - 12)² = 169
        25 + (y - 12)² = 169
        (y - 12)² = 169 - 25
        (y - 12)² = 144
        y - 12 = \\pm\\sqrt{144}
        y - 12 = 12 or -12
        y = 24 or 0
        (0, 24), (0, 0)`,
    },
    {
        question: `A circular patch of water of negligible thickness is expanding on a thin piece of paper. At time t seconds the rate of change of the radius, r cm, of the patch is given by dr/dt = k/(2t + 1) cm/s, where k is a constant. Initially the radius of the patch is 1 cm and the radius is increasing at a rate of 0.5 cm/s.
        a) Show that k = 0.5.
        b) Find an expression for r in terms of t.
        c) Hence find the rate of increase of the area of the patch after the patch has been expanding for 3 seconds.`,
        answer: `a) k = 0.5
        b) r = 1/4(ln(2t + 1) + 1)
        c) 0.667 cm²/s`,
        solution: `a) dr/dt = k/(2t + 1)
        When t = 0 and dr/dt = 0.5,
        0.5 = k/(2(0) + 1)
        0.5 = k/1
        0.5 = k
        
        b) dr/dt = k/(2t + 1) = 0.5/(2t + 1) = 1/2(1/(2t + 1))
        r = \\int 1/2(1/(2t + 1)) dt = 1/2\\int 1/(2t + 1) dt = 1/2[ln(2t + 1)/2] + c = 1/4ln(2t + 1) + c
        When t = 0 and r = 1,
        1 = 1/4ln[2(0) + 1] + c
        1 = 1/4(0) + c
        1 = c
        r = 1/4ln(2t + 1) + 1
        
        c) Let A denote area of the circular patch
        dA/dt = dA/dr \\times dr/dt = dA/dr \\times 1/2(1/(2t + 1))
        A = \\pir²
        dA/dr = 2\\pir
        dA/dt = 2\\pir \\times 1/2(1/(2t + 1)) = \\pir (1/(2t + 1)) = (\\pir)/(2t + 1)
        Substitute t = 3 into equation of r,
        r = 1/4(ln[2(3) + 1]) + 1 = 1/4(ln7) + 1
        dA/dt = (\\pi(1/4(ln7) + 1))/(2(3) + 1) = 0.66717 \\approx 0.667 cm²/s`,
    },
    {
        question: `A ball is thrown vertically upwards. Its height, h m, above the ground at time t seconds after being thrown is given by the formula h = 1.75 + 5t - 5t². a) State the height above the ground from which the ball is thrown.
        b) Express h in the form a + b(t + c)² where a, b and c are constants to be determined.
        c) Hence state the maximum height attained by the ball and the time at which this occurs.
        d) The ball hits the ground. Explain why the time taken for the ball to hit the ground is not twice the time found in part (c).
        e) Find the length of time for which the ball is at least 2 m above the ground.`,
        answer: `a) 1.75 m
        b) 3 - 5(t - 0.5)²
        c) maximum height = 3 m, time = 0.5 seconds
        d) 1.75 m
        e) 0.894 s`,
        solution: `a) h = 1.75 + 5t - 5t²
        Let t = 0,
        h = 1.75 + 5(0) - 5(0)² 
        h = 1.75 m
        
        b) 1.75 + 5t - 5t² 
        = -5t² + 5t + 1.75 
        = -5(t² - t) + 1.75 
        = -5[(t - 1/2)² - (1/2)²] + 1.75 
        = -5(t - 0.5)² + 1.25 + 1.75 
        = -5(t - 0.5)² + 3  = 3 - 5(t - 0.5)²
        
        c) h = -5(t - 0.5²) + 3
        Maximum height = 3 m when time is 0.5 seconds
        
        d) The ball's path started from 1.75 m above the ground instead of from the ground
        
        e) h = 3 - 5(t - 0.5)²
        Let h = 2,
        2 = 3 - 5(t - 0.5)²
        5(t - 0.5)² = 1
        (t - 0.5)² = 1/5
        t - 0.5 = \\pm\\sqrt{1/5}
        t = \\sqrt{1/5} + 0.5 or -\\sqrt{1/5} + 0.5
        t = 0.94721 or 0.05278
        Duration = 0.94721 - 0.05278 = 0.89443 \\approx 0.894 s`,
    },
];

// convert pyp_questions_raw to plain text
const pyp_questions = pyp_questions_raw.map(item => ({
    question: latexToPlainText(item.question),
    answer: latexToPlainText(item.answer),
    solution: latexToPlainText(item.solution),
}));

module.exports = pyp_questions;

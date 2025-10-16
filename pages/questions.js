const questions = [
  {
    topic: "Quadratic Equations",
    question: "a) Express $y=2x^2-10x+m$ in the form $a(x-h)^2+k$.\n b) If the minimum value of $y$ is $-\frac{19}{2}$, find the value of $m$.\n c) Find the range of values of $m$ for which $y=2x^2-10x+m$ has two distinct $x$-intercepts.\n",
    answer: "a) $2(x-\frac{5}{2})^2+\frac{2m-25}{2}$\n b) 3\n c) $m<\frac{25}{2}$",
  },
  {
    topic: "Quadratic Equations",
    question: "A curve has the equation $y=-2x^2+4x+3$.\n a) Find the coordinates of the lowest point on the curve.\n b) Find the $x$-coordinates of the points at which the curve intersects the $x$-axis.\n",
    answer: "a) $(1,\,5)$\n b) $-0.581$, 2.58",
  },
  {
    topic: "Quadratic Equations",
    question: "The equation of a curve is $y=x^2+2x+8-p$, where $p$ is a constant.\n a) Find the range of values of $p$ for which the curve lies completely above the $x$-axis.\n b) In the case where $p=2$, find the coordinates of the turning point and the $y$-intercept on the graph of $y=x^2+px+8-p$.\n",
    answer: "a) $p<7$\n b) $(-1,\,5)$, 6",
  },
  {
    topic: "Quadratic Equations",
    question: "A ball is thrown from the top of a building. The height $h$ m, of the ball above the ground at time $t$ seconds is given by $h=4t-t^2+12$.\n a) Find the height of the ball 3 seconds later.\n b) Find the maximum height that the ball can reach.\n c) Find the values of $t$ when $h=0$.\n",
    answer: "a) 15 m\n b) 16 m\n c) $-2$, 6",
  },
  {
    topic: "Quadratic Equations",
    question: "Find the range of values of $k$ for which\n a) the graph of $y=x^2+2x+k+1$ lies completely above the $x$-axis,\n b) $-x^2+4x+k$ is always negative.\n",
    answer: "a) $k>0$\n b) $k<-4$",
  },
  {
    topic: "Equations and Inequalities",
    question: "Find the range of values of $k$ for which the quadratic equation $k^2x^2-2x+1=kx$ has real roots.\n",
    answer: "$-\frac{2}{3}\leq k\leq 2$ and $k\neq 0$",
  },
  {
    topic: "Equations and Inequalities",
    question: "One leg of a right-angled triangle is 7 cm shorter than the other leg. How long should the shorter leg be to ensure that the hypotenuse is at least 13 cm?\n",
    answer: "At least 5 cm",
  },
  {
    topic: "Equations and Inequalities",
    question: "a) Find the range of values of $x$ for which $x^2-5x+3>5-4x$.\n b) Find the range of values of $c$ for which $3x^2-6x+c>4$ for all real values of $x$.\n",
    answer: "a) $x<-1$ or $x>2$\n b) $c>7$",
  },
  {
    topic: "Equations and Inequalities",
    question: "It is given that $\frac{1}{4}<x<1$ is the solution set to the inequality $-px^2+qx-1>0$.\n a) Find the value of $p$ and of $q$.\n b) Hence find the range of values of $x$ for which the curve $y=-px^2+qx-1$ lies completely below the line $y=1-4x$.\n",
    answer: "a) $p=4,\,q=5$\n b) $x<\frac{1}{4}$ or $x>2$",
  },
  {
    topic: "Equations and Inequalities",
    question: "The curve $x^2+xy=15$ intersects the line $3x+5y=5$ at two distinct points. Calculate the coordinates of the intersection points.\n",
    answer: "$(-7.5,\,5.5)$ and $(5,\,-2)$",
  },
  {
    topic: "Surds",
    question: "a) Given that $(\\sqrt{5}-2)x=\\sqrt{5}+2$, express $x$ in the form $a+b\\sqrt{5}$, where $a$ and $b$ are integers.\n b) Hence evaluate $x+\\frac{1}{x}$ without using a calculator.",
    answer: "a) $9+4\\sqrt{5}$\n b) 18",
},
{
    topic: "Surds",
    question: "Solve each of the following equations.\n a) $\\sqrt{x^2-7}=3$\n b) $2x+\\sqrt{3-4x}=0$\n c) $\\frac{x}{\\sqrt{1-8x}}=\\frac{1}{3}$",
    answer: "a) $\\pm4$\n b) $-\\frac{3}{2}$\n c) $\\frac{1}{9}$",
},
{
    topic: "Surds",
    question: "Solve $\\sqrt{9x-2}=\\sqrt{4x-3}+\\sqrt{x+1}$.",
    answer: "3",
},
{
    topic: "Surds",
    question: "Given that $\\frac{1}{\\sqrt{3}}-\\frac{1}{\\sqrt{2}}=p$, express $\\sqrt{6}$ in terms of $p$.",
    answer: "$\\frac{5}{2}-3p^2$",
},
{
    topic: "Surds",
    question: "Find the possible values of the real numbers $a$ and $b$ such that $(a-6\\sqrt{5})(2+b\\sqrt{5})=-82$.",
    answer: "$a=-45,\,b=-\\frac{4}{15}$ or $a=4,\,b=3$",
},
{
  topic: "Polynomials and Partial Fractions",
  question: "The function $g$ is defined by $g(x)=x^3+ax^2+x+5$, where $a$ is a constant.\n a) $g(x)$ has a remainder of 31 when divided by $x-2$. Find the value of $a$.\n b) $g(x)=x(x-1)(x-b)+cx+5$ for all values of $x$. Find the value of $b$ and of $c$.",
  answer: "a) 4\n b) $b=-5,\,c=6$",
},
{
  topic: "Polynomials and Partial Fractions",
  question: "The function $f$ is defined by $f(x)=x^3+(k-2)x^2+(k-7)x-4$, where $k$ is a constant. Given $x+1$ and $x+2$ are factors of $f(x)$, find the value of $k$ and the third factor of $f(x)$.",
  answer: "$k=3$, $x-2$",
},
{
  topic: "Polynomials and Partial Fractions",
  question: "a) Factorise $(x+3)^3-x^3$ completely.\n b) The side of a cube is 3 cm longer than the side of another cube. The difference between the volumes of cubes is $189\\text{cm}^3$. Find the length of each cube.",
  answer: "a) $9(x^2+3x+3)$\n b) 3 cm, 6 cm",
},
{
  topic: "Polynomials and Partial Fractions",
  question: "The cubic polynomial $f(x)$ has a remainder of $-5$ when divided by $x+1$ and a remainder of 7 when divided by $x-2$. Find the remainder when $f(x)$ is divided by $x^2-x-2$.",
  answer: "$4x-1$",
},
{
  topic: "Polynomials and Partial Fractions",
  question: "a) Factorise $81x^3+24y^3$ completely.\n b) Hence simplify $\\frac{81x^3+24y^3}{9x^2-6xy+4y^2}$.",
  answer: "a) $3(3x+2y)(9x^2-6xy+4y^2)$\n b) $3(3x+2y)$",
},
{
  topic: "Exponential and Logarithmic Functions",
  question: "Use the substitution $u=4^x$ to solve each of the following equations.\n a) $2(4^x)+4^{x+2}=9(4^{-0.5})$\n b) $4^{x-1}+16^x=66$",
  answer: "a) $-1$\n b) $\\frac{3}{2}$",
},
{
  topic: "Exponential and Logarithmic Functions",
  question: "Without using a calculator, solve each of the following equations.\n a) $\\log_x 27 = 1.5$\n b) $\\log_2 x \\times \\log_8 x = 12$\n c) $\\log_3 (x-2) = 3 -\\log_3 (x+4)$",
  answer: "a) 9\n b) $\\frac{1}{64}$, 64\n c) 5",
},
{
  topic: "Exponential and Logarithmic Functions",
  question: "a) Given $\\log_3 (xy) - \\log_3 (x-1) = \\log_3 (6x^2) - 1$, express $y$ in terms of $x$.\n b) Use the substitution $u=\\log_5 x$ to solve equation $2\\log_5 x = 5 - \\log_x 25$.",
  answer: "a) $y=2x(x-1)$\n b) $\\sqrt{5}$, 25",
},
{
  topic: "Exponential and Logarithmic Functions",
  question: "The curve $y=ae^{bx}$ passes through the points $(0.5,\,1.1)$ and $(1.5,\,0.15)$. Find the value of $a$ and of $b$.",
  answer: "$a = 2.98,\,b = -1.99$",
},
{
  topic: "Exponential and Logarithmic Functions",
  question: "Using appropriate substitutions, solve each of the following equations.\n a) $5^x+5=30(5^{x-1})$\n b) $9^x+10(3^x)=3^{x+2}+12$",
  answer: "a) 0\n b) 1",
},
{
  topic: "Coordinate Geometry",
  question: "Given three collinear points $P(x+1,\,1)$, $Q(2x+1,\,3)$ and $R(2x+2,\,2x)$, find the possible values of $x$.",
  answer: "$x=-\\frac{1}{2}$ or $x=2$",
},
{
  topic: "Coordinate Geometry",
  question: "Two adjacent vertices of a square are $A(2,\,3)$ and $B(6,\,6)$.\n a) Find the possible coordinates of the other two vertices, $C$ and $D$.\n b) Find the possible coordinates of the centre of the square.",
  answer: "a) $C(9,\,2),\,D(5,\\,-1)$ or $C(3,\,10),\,D(-1,\,7)$\n b) $(5.5,\,2.5)$ or $(2.5,\,6.5)$",
},
{
  topic: "Coordinate Geometry",
  question: "Given that the points $P(a+b,\,a),\,Q(a-b,\,2a)$ and $R(b,\,c)$ are collinear, express $c$ in terms of $a$ and $b$.",
  answer: "$c=a+\\frac{a^2}{2b}$",
},
{
  topic: "Coordinate Geometry",
  question: "The line joining a point $P$ on the $y$-axis and the point $Q(-\\sqrt{3},\,1)$ makes an angle of $\\frac{2\\pi}{3}$ with the positive direction of the $x$-axis. Find the coordinates of $P$.",
  answer: "$P(0,\\,-2)$",
},
{
  topic: "Coordinate Geometry",
  question: "The equilateral triangle $PQR$ has vertices $P(4,\,0),\,Q(0,\,4)$ and $R$. Given that the vertex $R$ is above the $x$-axis, find the coordinates of $R$.",
  answer: "$R(2+2\\sqrt{3},\,2+2\\sqrt{3})$",
},
{
  topic: "Circles",
  question: "The circle $C_1$ whose radius is 13 units, passes through the point $P(10,\,18)$ and the $x$-axis is a tangent to the circle.\n a) Find the possible equations of $C_1$.\n b) Hence find the possible equations of the circle, $C_2$, which is the reflection of $C_1$ in the $x$-axis.",
  answer: "a) $(x+2)^2+(y-13)^2=169$ or $(x-22)^2+(y-13)^2=169$\n b) $(x+2)^2+(y+13)^2=169$ or $(x-22)^2+(y+13)^2=169$",
},
{
  topic: "Circles",
  question: "The points $A(-7,\,7)$ and $B(-1,\,7)$ lie on a circle whose centre is above the $x$-axis. The line $y=-2$ is a tangent to the circle.\n a) Find the coordinates of the centre of the circle.\n b) Find the general form of the equation of the circle.\n c) Find the equations of the tangents to the circle parallel to the $y$-axis.",
  answer: "a) $(-4,\,3)$\n b) $x^2+y^2+8x-6y=0$\n c) $x=-9,\,x=1$",
},
{
  topic: "Circles",
  question: "A circle intersects the $x$-axis at $P(13,\,0)$ and $Q(27,\,0)$ and intersects the $y$-axis at $R(0,\,9)$. Find the equation of the circle.",
  answer: "$(x-20)^2+(y-24)^2=625$",
},
{
  topic: "Circles",
  question: "A circle passes through the points $A(0,\,-3)$ and $B(2,\,-1)$. The centre of the circle lies on the line $2x+y=0$. Find\n a) the equation of the perpendicular bisector of $AB$,\n b) the equation of the circle.",
  answer: "a) $y=-x-1$\n b) $(x-1)^2+(y+2)^2=2$",
},
{
  topic: "Circles",
  question: "a) The line $y=mx$, where $m$ is a positive integer, does not intersect the circle $x^2+y^2-4mx+3=0$. Find the value of $m$.\n b) A line parallel to $y=mx$ is a tangent to the circle given in part (a). Find the possible equations of this line using the value of $m$ found in part (a).",
  answer: "a) $m=1$\n b) $y=x-2+\\sqrt{2}$ or $y=x-2-\\sqrt{2}$",
},
{
  topic: "Applications of Straight Line Graphs",
  question: "The variables $x$ and $y$ are related by the equation $xy=2(x+y)$. A student correctly claims that by plotting $\\frac{1}{x}$ against $\\frac{1}{y}$, a straight line graph is obtained. What is the gradient and the $\\frac{1}{x}$-intercept of the line?",
  answer: "Gradient = $-1$, $\\frac{1}{x}$-intercept = $\\frac{1}{2}$",
},
{
  topic: "Applications of Straight Line Graphs",
  question: "Based on experimental data, a student plotted $\\ln y$ against $x^2$ and obtained a straight line graph, which makes an angle of $60\\degree$ with the horizontal axis. Given that the point $(0,\,5)$ lies on the line, find an equation expression $y$ in terms of $x$.",
  answer: "$y=e^{\\sqrt{3}x^2+5}$",
},
{
  topic: "Applications of Straight Line Graphs",
  question: "In each of the following equations, $p$ and $q$ are constants. Express each equation in the form $Y=mX+c$, where $X$ and $Y$ are each functions of $x$ and/or $y$, and $m$ and $c$ are constants.\n a) $y=\\frac{x}{px+q}$\n b) $y=pq^{-x}$\n c) $e^y=px^2$",
  answer: "a) $\\frac{x}{y}=px+q$\n b) $\\lg y=(-\\lg q)x+\\lg p$\n c) $y=2\\ln x +\\ln p$",
},
{
  topic: "Applications of Straight Line Graphs",
  question: "The variables $x$ and $y$ are related by the equation $y=\\frac{ax}{x-b}$, where $a$ and $b$ are constants. When $y$ is plotted against $\\frac{y}{x}$, a straight line graph is obtained. The gradient of the line is 2 and the $y$-intercept is $-1$.\n a) Find the value of $a$ and of $b$.\n b) Find the values of $x$ for which $y=3x$.",
  answer: "a) $a=-1,\,b=2$\n b) $x=0$ or $x=\\frac{5}{3}$",
},
{
  topic: "Applications of Straight Line Graphs",
  question: "The variables $x$ and $y$ are related such that, when $\\frac{y}{x^2}$ is plotted against $\\frac{1}{x}$, a straight line is obtained. The line passes through the points $(3,\,10)$ and $(9,\,28)$.\n a) Express $y$ in terms of $x$.\n b) Find the value of $y$ when $x = \\frac{1}{\\sqrt{2}}$.",
  answer: "a) $y=x^2+3x$\n b) $y=\\frac{1+3\\sqrt{2}}{2}$",
},
{
  topic: "Trigonometric Functions",
  question: "Without using a calculator, evaluate\n a) $\\frac{\\sin\\frac{\\pi}{4}\\cos\\pi}{\\tan\\frac{\\pi}{3} + \\tan\\pi}$,\n b) $\\sin(-\\frac{7\\pi}{6})$,\n c) $\\cos(-\\frac{2\\pi}{3})$.",
  answer: "a) $-\\frac{1}{\\sqrt{6}}$\n b) $\\frac{1}{2}$\n c) $-\\frac{1}{2}$",
},
{
  topic: "Trigonometric Functions",
  question: "Given that $\\tan A = \\frac{3}{4},\,\\cos B = -\\frac{3}{5}$, and that $A$ and $B$ are in the same quadrant, evaluate\n a) $\\sin A$,\n b) $\\tan (-B)$,\n c) $\\sec A \\tan B$.",
  answer: "a) $-\\frac{3}{5}$\n b) $-\\frac{4}{3}$\n c) $-\\frac{5}{3}$",
},
{
  topic: "Trigonometric Functions",
  question: "Without using a calculator, find, in radians, the principal value of\n a) $\\sin^{-1} (-\\frac{1}{2})$,\n b) $\\cos^{-1} (-\\frac{\\sqrt{2}}{2})$,\n c) $\\tan^{-1} (-\\frac{\\sqrt{3}}{3})$.",
  answer: "a) $-\\frac{\\pi}{6}$\n b) $\\frac{3\\pi}{4}$\n c) $-\\frac{\\pi}{6}$",
},
{
  topic: "Trigonometric Functions",
  question: "Given that $\\tan A = -2$, $-\\frac{\\pi}{2}<A<\\frac{\\pi}{2}$, find the exact value of\n a) $\\sin (-A)$,\n b) $\\cot A$,\n c) $\\sin (\\frac{\\pi}{2}-A)$.",
  answer: "a) $\\frac{2\\sqrt{5}}{5}$\n b) $-\\frac{1}{2}$\n c) $\\frac{\\sqrt{5}}{5}$",
},
{
  topic: "Trigonometric Functions",
  question: "Without using a calculator, find, in radians, the principal value of\n a) $\\cos^{-1} (-\\sin\\frac{2\\pi}{3})$,\n b) $\\sin^{-1} [\\cos(-\\frac{3\\pi}{4})]$,\n c) $\\cos^{-1} (\\tan\\frac{5\\pi}{4})$.",
  answer: "a) $\\frac{5\\pi}{6}$\n b) $-\\frac{\\pi}{4}$\n c) 0",
},
{
  topic: "Trigonometric Identities and Equations",
  question: "Given that $\\sin(x-y)=p$ and that $\\sin x\\cos y = q$, express each of the following in terms of $p$ and $q$.\n a) $\\sin(x+y)$\n b) $\\frac{\\tan x}{\\tan y}$\n c) $\\sin 2x\\sin 2y$",
  answer: "a) $2q-p$\n b) $\\frac{q}{q-p}$\n c) $4q(q-p)$",
},
{
  topic: "Trigonometric Identities and Equations",
  question: "a) Given $A+B=45\\degree$ and that $\\tan A = 2$, find, without using a calculator, the value of $\\tan B$.\n b) Find the exact value of $\\tan x$ if $\\sin (x+45\\degree) = \\cos x$.",
  answer: "a) $-\\frac{1}{3}$\n b) $\\sqrt{2}-1$",
},
{
  topic: "Trigonometric Identities and Equations",
  question: "It is given that f$(x)=\\frac{\\cos^{3} x-\\sin^{3} x}{\\cos x -\\sin x}$, where $\\cos x - \\sin x \\neq 0$.\n a) Express f$(x)$ in the form $a\\sin bx + c$, where $a,\,b$ and $c$ are integers.\n b) Hence state the least value of f$(x)$.",
  answer: "a) $\\frac{1}{2}\\sin 2x + 1$\n b) $\\frac{1}{2}$",
},
{
  topic: "Trigonometric Identities and Equations",
  question: "a) Express $\\tan (2\\pi+x),\,\\sin (2\\pi-x)$ and $\\cos (x-\\frac{\\pi}{2})$ in terms of $\\sin x,\,\\cos x$ or $\\tan x$.\n b) Solve the equation $\\tan x + 2\\sec^{2} x - 5 = 0$ for $0\\leq x\\leq 2\\pi$.",
  answer: "a) $\\tan x,\\,-\\sin x,\,\\sin x$\n b) $\\frac{\\pi}{4},\,\\frac{5\\pi}{4}$, 2.16, 5.30",
},
{
  topic: "Trigonometric Identities and Equations",
  question: "a) Without using a calculator, find the values of $x$ such that $\\cos 2x = \\sin 230\\degree$, where $-180\\degree\\leq x\\leq 180\\degree$.\n b) Given that $\\cos A = -\\frac{3}{5}$ and $\\cos B = \\frac{12}{13}$, where $90\\degree<A<180\\degree$ and $0\\degree<B<90\\degree$, find the exact value of $\\cos (A-B)$.",
  answer: "a) $-110\\degree,\\,-70\\degree,\,70\\degree,\,110\\degree$\n b) $-\\frac{16}{65}$",
},
{
  topic: "Differentiation",
  question: "Differentiate the following functions with respect to $x$.\n a) $x^{1.5}$\n b) $x^{-\frac{1}{2}}$\n c) $x^{101}$\n d) $\\sqrt{x^3}$",
  answer: "a) $1.5\\sqrt{x}$\n b) $-\\frac{1}{2\\sqrt{x^3}}$\n c) $101x^{100}$\n d) $\\frac{3}{2}\\sqrt{x}$",
},
{
  topic: "Differentiation",
  question: "The gradient of the curve $y=(px+q)^3$ at the point $(0,\,8)$ is equal to 6. Find the value of $p$ and of $q$.",
  answer: "$p=\\frac{1}{2},\,q=2$",
},
{
  topic: "Differentiation",
  question: "Differentiate each function with respect to $x$.\n a) $y=a\\sqrt{x}+\\frac{1}{3}\\sqrt{a}$\n b) $y=(x^2+1)(4x-1)$",
  answer: "a) $\\frac{a}{2\\sqrt{x}}$\n b) $12x^2-2x+4$",
},
{
  topic: "Differentiation",
  question: "The equation of a curve is $y=(x-3)\\sqrt{x-1}$. Find\n a) $\\frac{dy}{dx}$,\n b) the coordinates of the point on the curve where the gradient is zero.",
  answer: "a) $\\frac{3x-5}{2\\sqrt{x-1}}$\n b) $(\\frac{5}{3},\,-\\frac{4\\sqrt{6}}{9})$",
},
{
  topic: "Differentiation",
  question: "It is given that g$(x)=\\,$f$(u)$, where $u=x^2+x$, and f'$(u)=\\frac{1}{u}$. Find g'$(x)$ in terms of $x$.",
  answer: "$\\frac{2x+1}{x^2+x}$",
},
{
  topic: "Tangents, Normals and Rates of Change",
  question: "Find the range of values of $x$ for which\n a) $y=x^2+2x-4$ is an increasing function,\n b) $y=3x^2+4x-3$ is a decreasing function.",
  answer: "a) $x>-1$\n b) $x<-\frac{2}{3}$",
},
{
  topic: "Tangents, Normals and Rates of Change",
  question: "It is given $y=(x-3)\\sqrt{2x+1}$. Find the value of $x$ when the rate of decrease of $y$ is twice the rate of increase of $x$.",
  answer: "$x=0$",
},
{
  topic: "Tangents, Normals and Rates of Change",
  question: "The gradient of the tangent to the curve $y=ax^2+bx$ at the point $(2,\,7)$ is equal to 6. Find the value of $a$ and of $b$.",
  answer: "$a=\\frac{5}{4},\,b=1$",
},
{
  topic: "Tangents, Normals and Rates of Change",
  question: "A man 1.8 metres tall is walking at a constant rate of 1.25 m/s away from a lamp post which is 8 metres tall. How fast is the length of his shadow changing?",
  answer: "$\\frac{45}{124}$m/s",
},
{
  topic: "Tangents, Normals and Rates of Change",
  question: "Find the equation of the tangent to the curve $y=(x+1)^2$ which is perpendicular to the line $4y=x+3$.",
  answer: "$y=-4x-8$",
},
{
  topic: "Maxima and Minima",
  question: "A curve has the equation $y=\\sqrt{3x^2+2}$.\n a) Obtain expressions for $\\frac{dy}{dx}$ and $\\frac{d^2y}{dx^2}$.\n The curve has a stationary point at $P$.\n b) Find the coordinates of $P$.\n c) Determine the nature of the stationary point at $P$.",
  answer: "a) $\\frac{3x}{\\sqrt{3x^2+2}},\\,\\frac{6}{(\\sqrt{3x^2+2})^3}$\n b) $P(0,\\,\\sqrt{2})$\n c) minimum point",
},
{
  topic: "Maxima and Minima",
  question: "A wire of $n$ units is divided into two parts such that three times the square of one part plus twice the square of the other part is a minimum.\n a) If the lengths of the two smaller parts are $x$ units and $y$ units respectively, and $z=3x^2+2y^2$, find $\\frac{dz}{dx}$.\n b) Solve the value of $x$ that makes $z$ a minimum. Express the answer in terms of $n$.\n c) Hence find the lengths of the two parts in terms of $n$.",
  answer: "a) $10x-4n$\n b) $x=\\frac{2}{5}n$\n c) $\\frac{2}{5}n,\\,\\frac{3}{5}n$",
},
{
  topic: "Maxima and Minima",
  question: "For his mathematics project, Jeff has been tasked to make a closed rectangular cardboard box whose total surface area should not exceed $p$ square metres.\n a) Given that the box must have a square cross-section, what dimensions of the box will give a maximum volume?\n b) What would be the maximum volume of the box?",
  answer: "a) A cube of side $\\sqrt{\\frac{p}{6}}$ metres.\n b) $(\\frac{p}{6})^{\\frac{3}{2}}\\text{m}^3$",
},
{
  topic: "Maxima and Minima",
  question: "If $2x+y=10$ and $A=xy$, find the maximum value of $A$.",
  answer: "$A=12.5$",
},
{
  topic: "Maxima and Minima",
  question: "A point $P$ moves along the curve $y=2x^3-12x^2+x+9$. Find the coordinates of $P$ such that the normal to the curve at $P$ will have a gradient that is either a maximum or minimum.",
  answer: "$P(2,\\,-21)$",
},
{
  topic: "Differentiation of Trigonometric, Exponential and Logarithmic Functions",
  question: "Differentiate each of the following with respect to $x$.\n a) $(x+1)e^{-x}$\n b) $e^{2x}\\sin x$\n c) $3x^2\\ln x$\n d) $\\frac{e^x}{2x+1}$",
  answer: "a) $-xe^{-x}$\n b) $e^{2x}(\\cos x + 2\\sin x)$\n c) $3x(1+2\\ln x)$\n d) $\\frac{e^x(2x-1)}{(2x+1)^2}$",
},
{
  topic: "Differentiation of Trigonometric, Exponential and Logarithmic Functions",
  question: "A curve has the equation $y=2\\cos x - 3\\sin(\\frac{x}{2})$.\n a) Find the gradient of the curve when $x=\\frac{\\pi}{3}$.\n b) Given that $x$ is increasing at a constant rate of 0.12 units per second, find the rate of change of $y$ when $x=\\frac{\\pi}{3}$.",
  answer: "a) $-\\frac{7\\sqrt{3}}{4}$\n b) $-\\frac{21\\sqrt{3}}{100}$ units/s",
},
{
  topic: "Differentiation of Trigonometric, Exponential and Logarithmic Functions",
  question: "Determine the nature of the stationary points of the curve $y=\\frac{x^2}{e^x}$.",
  answer: "minimum point $(0,\\,0)$, maximum point $(2,\\,\\frac{4}{e^2})$",
},
{
  topic: "Differentiation of Trigonometric, Exponential and Logarithmic Functions",
  question: "What is the angle between the tangent to the curve $y=\\cos 3x$ and the $x$-axis at the point where the curve crosses the axis?",
  answer: "$71.6\\degree$",
},
{
  topic: "Differentiation of Trigonometric, Exponential and Logarithmic Functions",
  question: "Given that $y=\\sin 4x+\\sin^4 x$, find the value of $\\frac{dy}{dx}$ when $x=\\frac{\\pi}{4}$.",
  answer: "$-3$",
},
{
  topic: "Integration",
  question: "a) Find $\\frac{d}{dx}(x^3\\ln x^2)$.\n b) Hence find $\\int x^2\\ln x\,\\mathrm{d}x$.",
  answer: "a) $2x^2+3x^2\\ln x^2$\n b) $\\frac{1}{3}x^3\\ln x-\\frac{1}{9}x^3+c$",
},
{
  topic: "Integration",
  question: "It is given that f$(x)$ is such that f'$(x)=5\\sin 2x\\cos 2x$ for $0\\leq x<1$. Given also that f$(x)$ has a stationary point at $y=1$, find an expression for f$(x)$.",
  answer: "f$(x)=-\\frac{5}{8}\\cos 4x+\\frac{3}{8}$ or f$(x)=-\\frac{5}{8}\\cos 4x+\\frac{13}{8}$",
},
{
  topic: "Integration",
  question: "It is given that $y=x+\\ln(x+1)$ and that $x$ is a function of $t$. Given that $\\frac{dx}{dt}=2t$ and that $x=1$ when $t=0$, find the value of $\\frac{dy}{dt}$ when $t=1$.",
  answer: "$\\frac{8}{3}$",
},
{
  topic: "Integration",
  question: "Integrate the following with respect to $x$.\n a) $3\\sin 2x-2\\sec^2 x$\n b) $4\\sin 2x\\cos 2x$",
  answer: "a) $-\\frac{3}{2}\\cos 2x-2\\tan x + c$\n b) $-\\frac{1}{2}\\cos 4x + c$",
},
{
  topic: "Integration",
  question: "Given that $\\frac{d^2y}{dx^2}=2x-7$ and that $y=3$ and $\\frac{dy}{dx}=0$ when $x=0$, express $y$ in terms of $x$.",
  answer: "$y=\\frac{1}{3}x^3-\\frac{7}{2}x^2+3$",
},
{
  topic: "Applications of Integration",
  question: "a) Find $\\frac{d}{dx}(xe^x)$.\n b) Hence find $\\int_0^1 xe^x\,dx$.",
  answer: "a) $xe^x+e^x$\n b) 1",
},
{
  topic: "Applications of Integration",
  question: "a) Evaluate $\\int_0^{2\\pi} \\sin x \,dx$.\n b) Find the area bounded by the $x$-axis and the curve $y = \\sin x$ for $0\\leq x\\leq 2\\pi$.",
  answer: "a) 0\n b) $4\,\\text{units}^2$",
},
{
  topic: "Applications of Integration",
  question: "Find the sum of the areas bounded by the $x$-axis and the curve $y=x(x-2)(x-3)$.",
  answer: "$3\\frac{1}{12}\,\\text{units}^2$",
},
{
  topic: "Applications of Integration",
  question: "Find the value of $a$, given that $\\int_1^a 4x\,dx = \\int_2^1 6x-3x^2\,dx$.",
  answer: "$a=0$",
},
{
  topic: "Applications of Integration",
  question: "The total cost, in dollars, of purchasing and maintaining an antique car for $x$ years is modelled by the equation $C=8000(30+3\\int_0^x t^{\\frac{1}{4}}\,dt)$. Find the total cost, correct to the nearest dollar, needed for\n a) 1 year,\n b) 3 years.",
  answer: "a) $259 200 b) $315 806",
},
{
  topic: "Kinematics",
  question: "A particle travels in a straight line so that $t$ seconds after passing a fixed point $O$, its displacement, $s$ metres is $s=t^3-9t^2+24t$.\n a) Find the velocity and acceleration of the particle when $t=1$.\n b) When does the particle change direction of motion?\n c) Find the distance travelled by the particle in the first 4 seconds.",
  answer: "a) 9 m/s, $-12\,\\text{m/s}^2$\n b) 2 s, 4 s\n c) 24 m",
},
{
  topic: "Kinematics",
  question: "A particle moves in a straight line so that $t$ seconds after leaving a fixed point $O$, its displacement $s$ m, from $O$, is given by $s=t(t-6)^2$.\n a) Given the particle returns to $O$ when $t=k$, find the value of $k$.\n b) Using this value of $k$, find the maximum displacement of the particle from $O$ during the interval $0<t<k$.",
  answer: "a) $k=6$\n b) 32 m",
},
{
  topic: "Kinematics",
  question: "A particle travels in a straight line so that $t$ seconds after passing a fixed point $O$, its displacement $s$ metres, is given by $s=t^3-3t^2-9t+4$. Find\n a) the initial displacement of the particle,\n b) the value of $t$ when the particle is instantaneously at rest,\n c) the distance travelled by the particle in the first 4 seconds.",
  answer: "a) 4 m\n b) $t=3$\n c) 34 m",
},
{
  topic: "Kinematics",
  question: "A particle travels in a straight line so that $t$ seconds after passing a fixed point $O$, its velocity $v$ m/s is $v=18t-3t^2$.\n a) Find the time interval during which the velocity is positive.\n b) Find the value of $t$ when the particle is again at its starting point, and its acceleration at this instant.\n c) What is the total distance travelled by the particle when it returns to its starting point?",
  answer: "a) $0<t<6$\n b) $t=9,\\,-36\\,\\text{m/s}^2$\n c) 216 m",
},
{
  topic: "Kinematics",
  question: "A particle travels in a straight line so that $t$ seconds after passing the starting point, its displacement $s$ metres is given by $s=21t^2-2t^3$.\n a) Find the velocity and acceleration when $t=1$.\n b) When does the particle change its direction of motion?\n c) Find the distance travelled by the particle in the first 10 seconds.",
  answer: "a) 36 m/s, 30 $\\text{m/s}^2$\n b) 7 s\n c) 586 m",
},
];

module.exports = questions;

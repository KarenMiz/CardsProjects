export const makeFirstLetterCapital = (text) => {
     const term = text.toLowerCase().trim();
     return term[0].toUpperCase() + term.slice(1);
   };

// אפשר גם ככה
//return text[0].toUpperCase()+text.slice(1).toLowerCase();

// וגם ככה
// להוסיף משנתה
// const term = text.toLowerCace().trim();
// return term[0].toUpperCase()+term.slice(1);
// trim = פונקציה שעובדת על סטרינגים ומה שהיא עושה מורידה את הרווחים הכפולים אם יש כאלה
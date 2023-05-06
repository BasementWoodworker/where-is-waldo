export function checkUserTry(click, target) {
  if (click.x >= target.leftBorder && 
      click.x <= target.rightBorder &&
      click.y >= target.upperBorder &&
      click.y <= target.lowerBorder) {
        return true;
      }
  return false;
}
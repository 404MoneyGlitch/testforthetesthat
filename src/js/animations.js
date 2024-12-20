export const triggerTrippy = async (element) => {
  element.classList.add('rgb-effect');
  await new Promise(resolve => setTimeout(resolve, 1000));
  element.classList.remove('rgb-effect');
};

export const typeWriter = async (element, text, speed = 50) => {
  element.textContent = '';
  element.classList.remove('visible');
  
  const words = text.split(' ');
  for (const word of words) {
    element.textContent += word + ' ';
    await new Promise(resolve => setTimeout(resolve, speed));
  }
  element.classList.add('visible');
};
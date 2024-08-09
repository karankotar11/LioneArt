export function playClickSound() {
    const audio = new Audio('sounds/clicksound.mp3');
    audio.play().catch((error) => {
      console.error("Failed to play sound:", error);
    });
  }
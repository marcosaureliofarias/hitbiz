/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      width: {
        90: '22rem',
      },
      backgroundImage: {
        rock: "url('https://media.istockphoto.com/photos/cropped-shot-of-electric-guitar-player-playing-hard-rock-music-on-picture-id683677222?k=20&m=683677222&s=612x612&w=0&h=eCAOKKptE8jDV-5v8HSSzHZPZLmZS-eKSzsfthdqE4o=')",
        samba:
          "url('https://media.istockphoto.com/photos/tambourine-player-picture-id641377418?k=20&m=641377418&s=612x612&w=0&h=E7z63-J6jJ9CLsuX4nvHGUZDDCmT_8KdR_NY0eC7U9k=')",
        gospel:
          "url('https://media.istockphoto.com/photos/good-friday-concept-picture-id1182468133?k=20&m=1182468133&s=612x612&w=0&h=bhyaI__lGVdZMBhXmFNNeXWvX65pwMHudxIPycnXWhQ=')",
        sertanejo:
          "url('https://media.istockphoto.com/photos/country-and-western-music-picture-id626207710?k=20&m=626207710&s=612x612&w=0&h=Nf3gKgsbHzF1z5dxrfKhXaMb_KA_AoaPihlTVJ4ucSQ=')",
        funk: "url('https://media.istockphoto.com/photos/rap-musician-in-studio-picture-id1190821267?k=20&m=1190821267&s=612x612&w=0&h=ZqBQlE4UjmjvS2TOZBuLbn6LV_n9RVb3Fihm_SW_MWc=')",
        pagode:
          "url('https://media.istockphoto.com/photos/ukulele-and-pander-instruments-picture-id842704592?k=20&m=842704592&s=612x612&w=0&h=Jqww56msFJCwtOqVJOvz4C6H3jL99_QpGQk9DZF0dWw=')",
        jazz: "url('https://media.istockphoto.com/photos/double-bass-at-a-concert-picture-id1172167705?k=20&m=1172167705&s=612x612&w=0&h=LtsPat1T-71vM_PNOTEecLKHOocwRTsOjImxnuIDvzc=')",
        infantil:
          "url('https://media.istockphoto.com/photos/kids-having-fun-together-picture-id1161617563?k=20&m=1161617563&s=612x612&w=0&h=jQh_LxkTkP5YiYfdAhWtIhblRi01vjuwhEFFjhDroUc=')",
      },
      colors: {
        primary: '#0a0a09',
        secondary: '#1b242a',
        'purple-1': '#4336f1',
        'purple-2': '#8442fe',
        'new-gray': '#252525',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}

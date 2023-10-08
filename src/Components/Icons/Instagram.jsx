import PropTypes from 'prop-types'

function InstagramIcon({ className, w = '17', h = '18', color = '#AAA' }) {
  return (
    <div className={'FacebookIcon ' + className} >
      <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} viewBox="0 0 16 18" fill="none">
        <g clipPath="url(#clip0_1_1458)">
          <path d="M9.808 10.8182C9.808 10.8182 9.93356 10.6926 10.1847 10.4415C10.4358 10.1904 10.5613 9.70989 10.5613 9.00007C10.5613 8.29025 10.3102 7.68422 9.808 7.18199C9.30577 6.67976 8.69974 6.42864 7.98992 6.42864C7.2801 6.42864 6.67407 6.67976 6.17184 7.18199C5.66961 7.68422 5.41849 8.29025 5.41849 9.00007C5.41849 9.70989 5.66961 10.3159 6.17184 10.8182C6.67407 11.3204 7.2801 11.5715 7.98992 11.5715C8.69974 11.5715 9.30577 11.3204 9.808 10.8182ZM10.7924 6.19761C10.7924 6.19761 10.9849 6.39014 11.3699 6.77518C11.755 7.16023 11.9475 7.90186 11.9475 9.00007C11.9475 10.0983 11.5625 11.0324 10.7924 11.8025C10.0223 12.5726 9.08813 12.9577 7.98992 12.9577C6.89171 12.9577 5.95755 12.5726 5.18747 11.8025C4.41738 11.0324 4.03233 10.0983 4.03233 9.00007C4.03233 7.90186 4.41738 6.9677 5.18747 6.19761C5.95755 5.42753 6.89171 5.04248 7.98992 5.04248C9.08813 5.04248 10.0223 5.42753 10.7924 6.19761ZM12.7611 4.22886C12.7611 4.22886 12.8063 4.27407 12.8967 4.36447C12.9871 4.45487 13.0323 4.6273 13.0323 4.88177C13.0323 5.13623 12.9419 5.35386 12.7611 5.53467C12.5803 5.71547 12.3627 5.80587 12.1082 5.80587C11.8538 5.80587 11.6361 5.71547 11.4553 5.53467C11.2745 5.35386 11.1841 5.13623 11.1841 4.88177C11.1841 4.6273 11.2745 4.40967 11.4553 4.22886C11.6361 4.04806 11.8538 3.95766 12.1082 3.95766C12.3627 3.95766 12.5803 4.04806 12.7611 4.22886ZM8.75834 2.66692C8.75834 2.66692 8.64198 2.66776 8.40928 2.66943C8.17658 2.67111 8.0368 2.67194 7.98992 2.67194C7.94305 2.67194 7.68691 2.67027 7.22151 2.66692C6.7561 2.66357 6.40287 2.66357 6.1618 2.66692C5.92072 2.67027 5.59762 2.68032 5.19249 2.69706C4.78735 2.7138 4.44249 2.74728 4.15789 2.7975C3.87329 2.84773 3.63389 2.90967 3.4397 2.98333C3.10488 3.11726 2.81023 3.31145 2.55577 3.56592C2.3013 3.82038 2.10711 4.11503 1.97318 4.44985C1.89952 4.64404 1.83758 4.88344 1.78735 5.16804C1.73713 5.45264 1.70365 5.7975 1.68691 6.20264C1.67017 6.60777 1.66012 6.93087 1.65677 7.17194C1.65342 7.41302 1.65342 7.76625 1.65677 8.23166C1.66012 8.69706 1.6618 8.9532 1.6618 9.00007C1.6618 9.04694 1.66012 9.30308 1.65677 9.76849C1.65342 10.2339 1.65342 10.5871 1.65677 10.8282C1.66012 11.0693 1.67017 11.3924 1.68691 11.7975C1.70365 12.2026 1.73713 12.5475 1.78735 12.8321C1.83758 13.1167 1.89952 13.3561 1.97318 13.5503C2.10711 13.8851 2.3013 14.1798 2.55577 14.4342C2.81023 14.6887 3.10488 14.8829 3.4397 15.0168C3.63389 15.0905 3.87329 15.1524 4.15789 15.2026C4.44249 15.2529 4.78735 15.2863 5.19249 15.3031C5.59762 15.3198 5.92072 15.3299 6.1618 15.3332C6.40287 15.3366 6.7561 15.3366 7.22151 15.3332C7.68691 15.3299 7.94305 15.3282 7.98992 15.3282C8.0368 15.3282 8.29293 15.3299 8.75834 15.3332C9.22374 15.3366 9.57697 15.3366 9.81805 15.3332C10.0591 15.3299 10.3822 15.3198 10.7874 15.3031C11.1925 15.2863 11.5374 15.2529 11.822 15.2026C12.1066 15.1524 12.3459 15.0905 12.5401 15.0168C12.875 14.8829 13.1696 14.6887 13.4241 14.4342C13.6785 14.1798 13.8727 13.8851 14.0067 13.5503C14.0803 13.3561 14.1423 13.1167 14.1925 12.8321C14.2427 12.5475 14.2762 12.2026 14.2929 11.7975C14.3097 11.3924 14.3197 11.0693 14.3231 10.8282C14.3264 10.5871 14.3264 10.2339 14.3231 9.76849C14.3197 9.30308 14.318 9.04694 14.318 9.00007C14.318 8.9532 14.3197 8.69706 14.3231 8.23166C14.3264 7.76625 14.3264 7.41302 14.3231 7.17194C14.3197 6.93087 14.3097 6.60777 14.2929 6.20264C14.2762 5.7975 14.2427 5.45264 14.1925 5.16804C14.1423 4.88344 14.0803 4.64404 14.0067 4.44985C13.8727 4.11503 13.6785 3.82038 13.4241 3.56592C13.1696 3.31145 12.875 3.11726 12.5401 2.98333C12.3459 2.90967 12.1066 2.84773 11.822 2.7975C11.5374 2.74728 11.1925 2.7138 10.7874 2.69706C10.3822 2.68032 10.0591 2.67027 9.81805 2.66692C9.57697 2.66357 9.22374 2.66357 8.75834 2.66692ZM15.654 5.81592C15.6875 6.4052 15.7042 7.46659 15.7042 9.00007C15.7042 10.5336 15.6875 11.5949 15.654 12.1842C15.587 13.5771 15.1718 14.6552 14.4084 15.4186C13.6451 16.182 12.5669 16.5972 11.1741 16.6641C10.5848 16.6976 9.5234 16.7144 7.98992 16.7144C6.45644 16.7144 5.39505 16.6976 4.80577 16.6641C3.41291 16.5972 2.33479 16.182 1.57139 15.4186C0.808001 14.6552 0.392822 13.5771 0.325858 12.1842C0.292376 11.5949 0.275635 10.5336 0.275635 9.00007C0.275635 7.46659 0.292376 6.4052 0.325858 5.81592C0.392822 4.42306 0.808001 3.34494 1.57139 2.58154C2.33479 1.81815 3.41291 1.40297 4.80577 1.33601C5.39505 1.30253 6.45644 1.28578 7.98992 1.28578C9.5234 1.28578 10.5848 1.30253 11.1741 1.33601C12.5669 1.40297 13.6451 1.81815 14.4084 2.58154C15.1718 3.34494 15.587 4.42306 15.654 5.81592Z" fill={color} />
        </g>
        <defs>
          <clipPath id="clip0_1_1458">
            <rect width="15.44" height="18" fill="white" transform="matrix(1 0 0 -1 0.27002 18)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

InstagramIcon.propTypes = {
  className: PropTypes.string,
  w: PropTypes.string,
  h: PropTypes.string,
  color: PropTypes.string,
}


export default InstagramIcon
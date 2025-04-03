"use client";

import { motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

function WordmarkPaths() {
  return (
    <>
    <path d="M 13.098 199.945 A 50.821 50.821 0 0 0 26.75 201.751 A 89.125 89.125 0 0 0 33.342 201.507 A 95.84 95.84 0 0 0 61.625 194.876 Q 79 188.001 94.25 175.626 Q 109.5 163.251 121.375 146.626 Q 133.25 130.001 140 110.126 Q 146.75 90.251 146.75 68.501 A 107.668 107.668 0 0 0 146.011 55.71 A 85.659 85.659 0 0 0 140.5 33.751 Q 134.25 18.251 120.625 9.126 A 45.917 45.917 0 0 0 113.3 5.152 Q 106.847 2.358 98.92 1.079 A 90.685 90.685 0 0 0 84.5 0.001 Q 68.5 0.001 54.25 4.626 A 110.551 110.551 0 0 0 45.467 7.884 A 90.654 90.654 0 0 0 29.125 16.751 A 77.868 77.868 0 0 0 20.245 23.83 A 56.958 56.958 0 0 0 12.125 33.126 A 38.728 38.728 0 0 0 8.216 40.179 A 27.267 27.267 0 0 0 6 50.751 A 18.938 18.938 0 0 0 6.023 51.684 A 14.896 14.896 0 0 0 9.375 60.626 Q 11.854 63.656 16.961 64.46 A 26.024 26.024 0 0 0 21 64.751 A 26.358 26.358 0 0 1 20.934 64.517 Q 20.706 63.688 20.504 62.751 A 43.624 43.624 0 0 1 20.125 60.751 Q 19.913 59.481 19.821 57.972 A 40.606 40.606 0 0 1 19.75 55.501 Q 19.75 41.751 27.25 30.751 A 49.663 49.663 0 0 1 33.949 22.844 A 55.951 55.951 0 0 1 47.75 13.251 A 59.355 59.355 0 0 1 59.747 8.808 A 69.993 69.993 0 0 1 77 6.751 A 66.321 66.321 0 0 1 86.604 7.424 A 51.07 51.07 0 0 1 103.75 13.001 Q 115.25 19.251 121.75 32.376 A 52.141 52.141 0 0 1 124.37 38.714 Q 126.406 44.692 127.374 51.841 A 103.89 103.89 0 0 1 128.25 65.751 Q 128.25 84.251 122.875 102.876 Q 117.5 121.501 107.75 138.126 Q 98 154.751 85.125 167.626 Q 72.25 180.501 57.375 187.876 Q 42.5 195.251 26.5 195.251 Q 24 195.251 21.625 195.001 A 88.855 88.855 0 0 1 21.568 194.995 Q 19.208 194.745 15.75 194.251 Q 19.75 176.251 25.75 154.251 A 1156.274 1156.274 0 0 1 27.27 148.734 A 1267.514 1267.514 0 0 1 39 109.126 Q 46.25 86.001 54.125 64.251 A 820.412 820.412 0 0 1 61.969 43.439 A 639.906 639.906 0 0 1 69.75 24.501 A 15.066 15.066 0 0 0 67.016 22.93 A 10.613 10.613 0 0 0 62.75 22.001 A 9.526 9.526 0 0 0 58.527 22.988 A 12.415 12.415 0 0 0 55.75 24.876 A 28.638 28.638 0 0 0 54.16 26.396 A 32.116 32.116 0 0 0 50 31.751 A 74.675 74.675 0 0 0 48.653 33.991 A 63.825 63.825 0 0 0 45.75 39.626 Q 44 43.501 43.25 45.501 Q 41.938 49.064 39.781 55.157 A 2082.054 2082.054 0 0 0 38.25 59.501 A 715.499 715.499 0 0 0 37.321 62.162 Q 35.906 66.242 34.356 70.857 A 1294.059 1294.059 0 0 0 31 81.001 A 1641.017 1641.017 0 0 0 26.906 93.72 A 2016.714 2016.714 0 0 0 22.625 107.376 Q 18.25 121.501 14 136.126 A 1180.432 1180.432 0 0 0 13.471 137.951 A 1079.295 1079.295 0 0 0 6.125 164.626 A 598.449 598.449 0 0 0 2.781 178.032 A 473.012 473.012 0 0 0 0 190.501 A 28.902 28.902 0 0 0 3.15 194.233 A 21.216 21.216 0 0 0 12 199.626 A 47.632 47.632 0 0 0 13.098 199.945 Z M 422 139.501 L 425 143.001 A 128.231 128.231 0 0 1 416.648 160.631 A 144.363 144.363 0 0 1 414.75 163.876 A 69.394 69.394 0 0 1 406.579 174.919 A 58.262 58.262 0 0 1 400.125 181.001 A 30.813 30.813 0 0 1 390.804 186.256 A 27.635 27.635 0 0 1 381.75 187.751 A 22.5 22.5 0 0 1 376.973 187.277 Q 371.813 186.156 369 182.376 Q 365 177.001 365 169.501 A 41.682 41.682 0 0 1 365 169.404 A 43.326 43.326 0 0 1 366.875 157.001 Q 368.75 150.751 370.625 144.751 Q 372.217 139.656 372.457 135.462 A 25.563 25.563 0 0 0 372.5 134.001 A 17.424 17.424 0 0 0 372.341 131.557 Q 371.902 128.47 370.25 127.001 A 8.196 8.196 0 0 0 368.031 125.566 A 6.998 6.998 0 0 0 365.25 125.001 A 9.899 9.899 0 0 0 360.664 126.233 Q 357.333 127.97 353.719 132.154 A 51.527 51.527 0 0 0 351.625 134.751 Q 344.25 144.501 332.5 162.251 A 85.032 85.032 0 0 0 326.64 172.465 A 76.745 76.745 0 0 0 325.75 174.376 A 340.464 340.464 0 0 1 323.062 180.22 A 258.768 258.768 0 0 1 320.5 185.501 Q 318.5 185.501 315.5 185.001 Q 312.5 184.501 310.125 183.376 A 6.719 6.719 0 0 1 309.114 182.795 Q 308.604 182.433 308.284 182.021 A 2.424 2.424 0 0 1 307.75 180.501 A 5.619 5.619 0 0 1 307.856 179.546 Q 308.154 177.893 309.292 174.515 A 132.84 132.84 0 0 1 310.125 172.126 Q 312.5 165.501 315.625 156.626 Q 318.75 147.751 321.125 138.626 A 89.979 89.979 0 0 0 322.549 132.279 Q 323.114 129.213 323.343 126.517 A 41.528 41.528 0 0 0 323.5 123.001 A 21.538 21.538 0 0 0 323.338 120.271 Q 323.027 117.849 322.125 116.126 A 4.642 4.642 0 0 0 318.774 113.645 A 7.591 7.591 0 0 0 317.25 113.501 A 11.851 11.851 0 0 0 313.252 114.266 Q 309.853 115.488 305.793 118.659 A 52.352 52.352 0 0 0 304 120.126 Q 296.25 126.751 288 137.501 A 203.943 203.943 0 0 0 276.117 154.822 A 234.088 234.088 0 0 0 272.375 161.126 A 162.189 162.189 0 0 0 263.093 179.969 A 141.509 141.509 0 0 0 260.5 186.751 Q 258.25 186.751 255 186.001 A 27.823 27.823 0 0 1 252.145 185.188 Q 250.731 184.698 249.534 184.084 A 17.113 17.113 0 0 1 249.375 184.001 A 10.028 10.028 0 0 1 248.464 183.464 Q 247.584 182.874 247.233 182.284 A 1.52 1.52 0 0 1 247 181.501 A 4.398 4.398 0 0 1 247.092 180.732 Q 247.463 178.773 249.322 173.483 A 226.219 226.219 0 0 1 249.625 172.626 A 506.178 506.178 0 0 0 251.699 166.673 Q 253.516 161.361 255.625 154.876 Q 259 144.501 261.625 133.751 Q 263.812 124.796 264.177 117.576 A 55.95 55.95 0 0 0 264.25 114.751 Q 265.742 113.01 268.967 111.269 A 32.738 32.738 0 0 1 269 111.251 A 14.228 14.228 0 0 1 274.554 109.553 A 13.789 13.789 0 0 1 275.75 109.501 A 11.063 11.063 0 0 1 277.64 109.651 Q 278.646 109.826 279.435 110.205 A 4.741 4.741 0 0 1 280.875 111.251 Q 282.462 112.96 282.499 115.86 A 10.916 10.916 0 0 1 282.5 116.001 A 18.418 18.418 0 0 1 282.383 117.915 Q 282.031 121.22 280.625 127.126 A 324.077 324.077 0 0 1 278.531 135.407 A 437.405 437.405 0 0 1 276 144.501 A 206.235 206.235 0 0 1 283.525 133.324 A 242.958 242.958 0 0 1 287.375 128.126 A 152.335 152.335 0 0 1 299.66 113.853 A 139.47 139.47 0 0 1 300.75 112.751 A 87.538 87.538 0 0 1 308.223 106.055 A 67.859 67.859 0 0 1 314.875 101.376 A 32.984 32.984 0 0 1 320.602 98.544 Q 324.742 97.001 328.75 97.001 A 16.512 16.512 0 0 1 332.724 97.446 A 9.733 9.733 0 0 1 339.375 102.626 A 25.423 25.423 0 0 1 341.7 109.627 A 35.14 35.14 0 0 1 342.25 116.001 A 63.441 63.441 0 0 1 341.6 124.89 A 75.664 75.664 0 0 1 340.875 129.126 A 154.181 154.181 0 0 1 339.01 137.329 A 125.948 125.948 0 0 1 337.75 141.876 A 142.353 142.353 0 0 1 336.681 145.316 Q 335.531 148.845 334.5 151.251 Q 339.75 141.751 346.125 132.876 A 73.628 73.628 0 0 1 353.434 124.141 A 58.45 58.45 0 0 1 360 118.376 A 28.889 28.889 0 0 1 367.75 114.157 A 24.698 24.698 0 0 1 376 112.751 A 21.015 21.015 0 0 1 380.011 113.106 Q 384.854 114.05 387.125 117.501 A 18.89 18.89 0 0 1 390.03 125.422 A 24.424 24.424 0 0 1 390.25 128.751 Q 390.25 135.251 388 143.001 A 462.96 462.96 0 0 1 383.523 157.548 A 425.341 425.341 0 0 1 383.375 158.001 A 58.862 58.862 0 0 0 381.975 162.954 Q 381 167.138 381 170.501 A 11.145 11.145 0 0 0 381.914 175.025 A 10.803 10.803 0 0 0 382.625 176.376 A 5.152 5.152 0 0 0 385.48 178.568 Q 386.41 178.879 387.563 178.967 A 12.381 12.381 0 0 0 388.5 179.001 A 15.81 15.81 0 0 0 397.009 176.448 Q 399.228 175.06 401.343 172.915 A 30.493 30.493 0 0 0 401.625 172.626 A 70.775 70.775 0 0 0 408.239 164.584 A 92.253 92.253 0 0 0 413 157.126 A 199.71 199.71 0 0 0 418.977 145.964 A 165.481 165.481 0 0 0 422 139.501 Z M 260.75 139.501 L 263.25 142.001 A 93.217 93.217 0 0 1 254.613 159.028 A 81.369 81.369 0 0 1 249.75 165.751 A 80.198 80.198 0 0 1 241.219 174.876 A 61.009 61.009 0 0 1 232.125 181.751 A 42.85 42.85 0 0 1 224.282 185.579 A 30.894 30.894 0 0 1 213.75 187.501 Q 207.125 187.501 203.001 184.68 A 13.125 13.125 0 0 1 200.125 182.001 A 20.403 20.403 0 0 1 196.744 175.969 A 18.117 18.117 0 0 1 195.75 170.001 A 21.507 21.507 0 0 1 195.809 168.46 Q 195.871 167.593 196 166.626 Q 196.25 164.751 196.5 162.751 A 192.487 192.487 0 0 1 189.964 171.106 Q 186.477 175.303 183.211 178.647 A 77.312 77.312 0 0 1 176.875 184.501 Q 168 191.751 158.75 191.751 Q 151 191.751 145.625 186.626 A 15.959 15.959 0 0 1 141.552 180.035 Q 140.25 176.169 140.25 171.001 Q 140.25 162.001 144.25 151.626 A 94.494 94.494 0 0 1 151.889 136.284 A 110.943 110.943 0 0 1 155.25 131.126 Q 162.25 121.001 171.125 112.626 A 83.874 83.874 0 0 1 183.801 102.706 A 72.97 72.97 0 0 1 189.875 99.251 Q 199.75 94.251 209.5 94.251 A 30.567 30.567 0 0 1 217.115 95.155 A 23.008 23.008 0 0 1 225.75 99.376 A 16.275 16.275 0 0 1 232.172 111.182 A 20.879 20.879 0 0 1 232.25 113.001 A 18.032 18.032 0 0 1 232.026 115.958 Q 231.768 117.501 231.216 118.695 A 6.625 6.625 0 0 1 228.875 121.501 Q 225.5 123.751 220 123.751 A 45.811 45.811 0 0 0 220.523 121.383 A 57.666 57.666 0 0 0 220.875 119.376 Q 221.25 117.001 221.25 115.001 A 20.12 20.12 0 0 0 220.666 110.046 A 15.788 15.788 0 0 0 218.5 105.126 A 8.648 8.648 0 0 0 213.824 101.682 Q 212.295 101.182 210.41 101.049 A 20.075 20.075 0 0 0 209 101.001 Q 202.185 101.001 195.132 105.623 A 38.568 38.568 0 0 0 194.75 105.876 A 59.227 59.227 0 0 0 186.861 112.284 A 79.101 79.101 0 0 0 180.75 118.876 Q 174 127.001 168.75 136.501 A 113.291 113.291 0 0 0 162.711 149.154 A 96.251 96.251 0 0 0 160.5 155.251 A 70.686 70.686 0 0 0 158.558 162.437 Q 157.5 167.447 157.5 171.751 Q 157.5 181.501 164.25 181.501 A 14.553 14.553 0 0 0 169.28 180.545 Q 171.342 179.787 173.517 178.428 A 34.857 34.857 0 0 0 176.75 176.126 A 83.974 83.974 0 0 0 183.161 170.428 Q 186.351 167.304 189.621 163.543 A 142.302 142.302 0 0 0 190.625 162.376 Q 197.75 154.001 204.25 145.001 Q 210.75 136.001 215.75 128.501 Q 216.604 127.22 216.911 127.033 A 0.181 0.181 0 0 1 217 127.001 A 17.48 17.48 0 0 1 218.023 127.206 Q 219.161 127.467 220.66 127.934 A 56.614 56.614 0 0 1 220.875 128.001 A 16.165 16.165 0 0 1 223.333 128.995 A 12.966 12.966 0 0 1 225 130.001 A 4.521 4.521 0 0 1 226.066 131.044 A 3.7 3.7 0 0 1 226.75 133.251 Q 226.75 135.501 224.5 139.376 A 364.752 364.752 0 0 0 222.281 143.256 Q 221.126 145.303 219.863 147.592 A 612.352 612.352 0 0 0 219.5 148.251 Q 216.75 153.251 214.5 158.376 A 29.248 29.248 0 0 0 212.962 162.741 Q 212.294 165.299 212.253 167.684 A 18.135 18.135 0 0 0 212.25 168.001 A 14.647 14.647 0 0 0 213.57 174.012 A 17.897 17.897 0 0 0 214.25 175.376 A 6.805 6.805 0 0 0 216.674 177.978 Q 218.359 179.001 220.75 179.001 A 12.837 12.837 0 0 0 225.132 178.131 Q 229.15 176.661 234.237 172.707 A 78.884 78.884 0 0 0 238.5 169.126 Q 246.346 162.083 254.319 150.016 A 186.927 186.927 0 0 0 260.75 139.501 Z M 800.75 139.501 L 803.25 142.001 A 93.217 93.217 0 0 1 794.613 159.028 A 81.369 81.369 0 0 1 789.75 165.751 A 80.198 80.198 0 0 1 781.219 174.876 A 61.009 61.009 0 0 1 772.125 181.751 A 42.85 42.85 0 0 1 764.282 185.579 A 30.894 30.894 0 0 1 753.75 187.501 Q 747.125 187.501 743.001 184.68 A 13.125 13.125 0 0 1 740.125 182.001 A 20.403 20.403 0 0 1 736.744 175.969 A 18.117 18.117 0 0 1 735.75 170.001 A 21.507 21.507 0 0 1 735.809 168.46 Q 735.871 167.593 736 166.626 Q 736.25 164.751 736.5 162.751 A 192.487 192.487 0 0 1 729.964 171.106 Q 726.477 175.303 723.211 178.647 A 77.312 77.312 0 0 1 716.875 184.501 Q 708 191.751 698.75 191.751 Q 691 191.751 685.625 186.626 A 15.959 15.959 0 0 1 681.552 180.035 Q 680.25 176.169 680.25 171.001 Q 680.25 162.001 684.25 151.626 A 94.494 94.494 0 0 1 691.889 136.284 A 110.943 110.943 0 0 1 695.25 131.126 Q 702.25 121.001 711.125 112.626 A 83.874 83.874 0 0 1 723.801 102.706 A 72.97 72.97 0 0 1 729.875 99.251 Q 739.75 94.251 749.5 94.251 A 30.567 30.567 0 0 1 757.115 95.155 A 23.008 23.008 0 0 1 765.75 99.376 A 16.275 16.275 0 0 1 772.172 111.182 A 20.879 20.879 0 0 1 772.25 113.001 A 18.032 18.032 0 0 1 772.026 115.958 Q 771.768 117.501 771.216 118.695 A 6.625 6.625 0 0 1 768.875 121.501 Q 765.5 123.751 760 123.751 A 45.811 45.811 0 0 0 760.523 121.383 A 57.666 57.666 0 0 0 760.875 119.376 Q 761.25 117.001 761.25 115.001 A 20.12 20.12 0 0 0 760.666 110.046 A 15.788 15.788 0 0 0 758.5 105.126 A 8.648 8.648 0 0 0 753.824 101.682 Q 752.295 101.182 750.41 101.049 A 20.075 20.075 0 0 0 749 101.001 Q 742.185 101.001 735.132 105.623 A 38.568 38.568 0 0 0 734.75 105.876 A 59.227 59.227 0 0 0 726.861 112.284 A 79.101 79.101 0 0 0 720.75 118.876 Q 714 127.001 708.75 136.501 A 113.291 113.291 0 0 0 702.711 149.154 A 96.251 96.251 0 0 0 700.5 155.251 A 70.686 70.686 0 0 0 698.558 162.437 Q 697.5 167.447 697.5 171.751 Q 697.5 181.501 704.25 181.501 A 14.553 14.553 0 0 0 709.28 180.545 Q 711.342 179.787 713.517 178.428 A 34.857 34.857 0 0 0 716.75 176.126 A 83.974 83.974 0 0 0 723.161 170.428 Q 726.351 167.304 729.621 163.543 A 142.302 142.302 0 0 0 730.625 162.376 Q 737.75 154.001 744.25 145.001 Q 750.75 136.001 755.75 128.501 Q 756.604 127.22 756.911 127.033 A 0.181 0.181 0 0 1 757 127.001 A 17.48 17.48 0 0 1 758.023 127.206 Q 759.161 127.467 760.66 127.934 A 56.614 56.614 0 0 1 760.875 128.001 A 16.165 16.165 0 0 1 763.333 128.995 A 12.966 12.966 0 0 1 765 130.001 A 4.521 4.521 0 0 1 766.066 131.044 A 3.7 3.7 0 0 1 766.75 133.251 Q 766.75 135.501 764.5 139.376 A 364.752 364.752 0 0 0 762.281 143.256 Q 761.126 145.303 759.863 147.592 A 612.352 612.352 0 0 0 759.5 148.251 Q 756.75 153.251 754.5 158.376 A 29.248 29.248 0 0 0 752.962 162.741 Q 752.294 165.299 752.253 167.684 A 18.135 18.135 0 0 0 752.25 168.001 A 14.647 14.647 0 0 0 753.57 174.012 A 17.897 17.897 0 0 0 754.25 175.376 A 6.805 6.805 0 0 0 756.674 177.978 Q 758.359 179.001 760.75 179.001 A 12.837 12.837 0 0 0 765.132 178.131 Q 769.15 176.661 774.237 172.707 A 78.884 78.884 0 0 0 778.5 169.126 Q 786.346 162.083 794.319 150.016 A 186.927 186.927 0 0 0 800.75 139.501 Z M 541.5 139.501 L 545.25 141.501 Q 535.25 162.751 523.5 175.126 Q 513.487 185.671 502.204 187.231 A 28.851 28.851 0 0 1 498.25 187.501 A 24.539 24.539 0 0 1 492.407 186.851 A 14.988 14.988 0 0 1 482.875 180.126 Q 478.443 173.059 478.258 162.663 A 51.259 51.259 0 0 1 478.25 161.751 A 78.958 78.958 0 0 1 478.883 152.118 Q 479.526 146.905 480.821 141.04 A 164.303 164.303 0 0 1 482.75 133.251 A 288.755 288.755 0 0 1 489.449 112.08 A 356.451 356.451 0 0 1 494.625 98.501 Q 502 80.251 510.75 62.876 A 476.085 476.085 0 0 1 520.594 44.318 A 379.181 379.181 0 0 1 528.25 31.251 A 252.488 252.488 0 0 1 534.361 21.752 Q 537.336 17.361 540.133 13.718 A 112.266 112.266 0 0 1 544.375 8.501 Q 551.206 0.628 555.356 0.047 A 4.645 4.645 0 0 1 556 0.001 Q 558.634 0.001 560.35 2.867 A 10.278 10.278 0 0 1 560.5 3.126 Q 562.141 6.056 563.122 10.084 A 39.029 39.029 0 0 1 563.25 10.626 Q 564.145 14.54 564.239 17.753 A 25.491 25.491 0 0 1 564.25 18.501 Q 564.25 24.95 561.169 35.164 A 125.888 125.888 0 0 1 560.875 36.126 A 164.702 164.702 0 0 1 557.396 46.12 Q 555.464 51.17 553.043 56.664 A 282.276 282.276 0 0 1 551.375 60.376 Q 545.25 73.751 536.875 87.376 Q 528.5 101.001 518.625 113.501 Q 508.75 126.001 497.75 135.001 A 165.027 165.027 0 0 0 495.664 146.125 A 148.192 148.192 0 0 0 495.375 148.126 Q 494.5 154.501 494.5 160.251 A 55.333 55.333 0 0 0 494.718 165.34 Q 495.273 171.337 497.25 174.751 A 9.938 9.938 0 0 0 499.751 177.686 Q 502.1 179.501 505.5 179.501 Q 512.25 179.501 518.875 173.501 A 65.497 65.497 0 0 0 525.702 166.244 A 87.907 87.907 0 0 0 531.375 158.376 Q 537.25 149.251 541.5 139.501 Z M 691.75 139.501 L 695.5 141.501 Q 685.5 162.751 673.75 175.126 Q 663.737 185.671 652.454 187.231 A 28.851 28.851 0 0 1 648.5 187.501 A 24.539 24.539 0 0 1 642.657 186.851 A 14.988 14.988 0 0 1 633.125 180.126 Q 628.693 173.059 628.508 162.663 A 51.259 51.259 0 0 1 628.5 161.751 A 78.958 78.958 0 0 1 629.133 152.118 Q 629.776 146.905 631.071 141.04 A 164.303 164.303 0 0 1 633 133.251 A 288.755 288.755 0 0 1 639.699 112.08 A 356.451 356.451 0 0 1 644.875 98.501 Q 652.25 80.251 661 62.876 A 476.085 476.085 0 0 1 670.844 44.318 A 379.181 379.181 0 0 1 678.5 31.251 A 252.488 252.488 0 0 1 684.611 21.752 Q 687.586 17.361 690.383 13.718 A 112.266 112.266 0 0 1 694.625 8.501 Q 701.456 0.628 705.606 0.047 A 4.645 4.645 0 0 1 706.25 0.001 Q 708.884 0.001 710.6 2.867 A 10.278 10.278 0 0 1 710.75 3.126 Q 712.391 6.056 713.372 10.084 A 39.029 39.029 0 0 1 713.5 10.626 Q 714.395 14.54 714.489 17.753 A 25.491 25.491 0 0 1 714.5 18.501 Q 714.5 24.95 711.419 35.164 A 125.888 125.888 0 0 1 711.125 36.126 A 164.702 164.702 0 0 1 707.646 46.12 Q 705.714 51.17 703.293 56.664 A 282.276 282.276 0 0 1 701.625 60.376 Q 695.5 73.751 687.125 87.376 Q 678.75 101.001 668.875 113.501 Q 659 126.001 648 135.001 A 165.027 165.027 0 0 0 645.914 146.125 A 148.192 148.192 0 0 0 645.625 148.126 Q 644.75 154.501 644.75 160.251 A 55.333 55.333 0 0 0 644.968 165.34 Q 645.523 171.337 647.5 174.751 A 9.938 9.938 0 0 0 650.001 177.686 Q 652.35 179.501 655.75 179.501 Q 662.5 179.501 669.125 173.501 A 65.497 65.497 0 0 0 675.952 166.244 A 87.907 87.907 0 0 0 681.625 158.376 Q 687.5 149.251 691.75 139.501 Z M 632.5 140.251 L 635.5 142.751 A 41.104 41.104 0 0 1 631.067 150.74 A 28.445 28.445 0 0 1 621.375 159.376 Q 612.25 164.251 604 164.251 A 30.737 30.737 0 0 1 598.126 163.702 A 28.436 28.436 0 0 1 597.75 163.626 Q 594.75 163.001 592 161.751 Q 583.5 173.001 573.375 180.501 Q 565.302 186.481 557.626 187.693 A 24.821 24.821 0 0 1 553.75 188.001 A 27.4 27.4 0 0 1 548.198 187.477 Q 544.878 186.789 542.41 185.198 A 13.572 13.572 0 0 1 538.5 181.376 Q 534 174.751 534 165.251 Q 534 157.501 536.5 149.251 Q 539 141.001 543.125 133.751 A 53.351 53.351 0 0 1 547.212 127.559 A 39.211 39.211 0 0 1 552.375 122.001 A 21.747 21.747 0 0 1 555.913 119.439 Q 558.298 118.077 560.709 117.672 A 12.314 12.314 0 0 1 562.75 117.501 Q 564 117.501 565.375 117.876 A 24.355 24.355 0 0 1 567.843 118.689 A 22.413 22.413 0 0 1 568 118.751 A 13.757 13.757 0 0 0 566.665 120.143 Q 565.327 121.725 563.736 124.277 A 70.665 70.665 0 0 0 562.625 126.126 A 83.217 83.217 0 0 0 559.251 132.599 A 108.167 108.167 0 0 0 556.75 138.376 Q 554 145.251 552.125 152.001 A 63.729 63.729 0 0 0 551.02 156.594 Q 550.587 158.768 550.397 160.682 A 28.693 28.693 0 0 0 550.25 163.501 Q 550.25 170.067 552.166 173.472 A 8.622 8.622 0 0 0 552.75 174.376 A 8.785 8.785 0 0 0 554.98 176.53 A 7.613 7.613 0 0 0 559.25 177.751 Q 564.5 177.751 571.75 172.126 A 74.908 74.908 0 0 0 579.383 165.268 A 101.313 101.313 0 0 0 586 157.751 A 36.259 36.259 0 0 1 577.113 146.822 A 44.854 44.854 0 0 1 575.125 142.626 Q 571.25 133.251 571.25 123.501 A 41.951 41.951 0 0 1 573.611 109.369 A 39.933 39.933 0 0 1 574.125 108.001 A 29.651 29.651 0 0 1 578.186 100.76 A 25.458 25.458 0 0 1 582.5 96.376 Q 588 92.001 595.75 92.001 Q 606 92.001 609.5 97.501 A 21.492 21.492 0 0 1 612.306 104.449 Q 612.935 107.284 612.994 110.567 A 38.09 38.09 0 0 1 613 111.251 A 47.385 47.385 0 0 1 611.956 120.859 Q 611.032 125.319 609.29 130.145 A 85.86 85.86 0 0 1 608.25 132.876 Q 603.5 144.751 596.25 155.751 Q 600.75 158.251 605.75 158.251 Q 609.75 158.251 614.75 156.626 A 27.263 27.263 0 0 0 620.489 153.954 A 36.192 36.192 0 0 0 624.625 151.001 A 26.324 26.324 0 0 0 630.159 144.657 A 34.218 34.218 0 0 0 632.5 140.251 Z M 482.25 139.501 L 484.5 142.001 Q 477.931 161.48 466.13 172.751 A 54.861 54.861 0 0 1 463.625 175.001 A 54.588 54.588 0 0 1 452.809 182.231 A 38.955 38.955 0 0 1 435.25 186.501 Q 427.385 186.501 422.774 182.516 A 14.829 14.829 0 0 1 420.75 180.376 A 22.539 22.539 0 0 1 416.204 169.012 A 29.494 29.494 0 0 1 416 165.501 Q 416 159.751 418.125 151.001 A 162.158 162.158 0 0 1 421.318 139.722 A 196.672 196.672 0 0 1 423.75 132.626 Q 427.25 123.001 431.875 114.501 Q 436.5 106.001 441.75 100.626 A 25.004 25.004 0 0 1 444.764 97.968 Q 446.475 96.705 448.159 96.029 A 10.254 10.254 0 0 1 452 95.251 A 6.149 6.149 0 0 1 454.274 95.662 A 5.706 5.706 0 0 1 455.875 96.626 A 4.379 4.379 0 0 1 457.271 98.88 Q 457.5 99.719 457.5 100.751 A 7.375 7.375 0 0 1 457.258 102.486 Q 456.531 105.439 453.625 110.501 Q 449.75 117.251 444.5 126.001 Q 439.25 134.751 435.375 144.376 A 56.358 56.358 0 0 0 432.469 153.782 A 43.405 43.405 0 0 0 431.5 162.751 A 42.37 42.37 0 0 0 431.665 166.64 Q 432.203 172.454 434.5 174.751 Q 436.877 177.129 441.296 177.622 A 22.142 22.142 0 0 0 443.75 177.751 Q 452.25 177.751 461.875 169.251 Q 471.5 160.751 482.25 139.501 Z M 500 126.501 A 156.618 156.618 0 0 0 511.269 113.886 A 189.78 189.78 0 0 0 517 106.376 Q 525.25 95.001 532.375 82.751 A 350.953 350.953 0 0 0 541.404 66.262 A 299.229 299.229 0 0 0 545 59.001 Q 550.5 47.501 553.5 38.376 A 94.682 94.682 0 0 0 554.95 33.57 Q 556.137 29.187 556.415 26.053 A 20.443 20.443 0 0 0 556.5 24.251 Q 556.5 21.916 555.955 21.108 A 1.315 1.315 0 0 0 555.875 21.001 Q 555.25 20.251 554.75 20.251 Q 553.119 20.251 549.578 24.489 A 63.401 63.401 0 0 0 547.875 26.626 A 123.844 123.844 0 0 0 544.331 31.526 Q 542.549 34.111 540.591 37.168 A 300.136 300.136 0 0 0 536.5 43.751 Q 530 54.501 523.25 68.251 A 457.691 457.691 0 0 0 510.758 96.065 A 498.109 498.109 0 0 0 510.375 97.001 A 309.406 309.406 0 0 0 501.162 122.641 A 278.991 278.991 0 0 0 500 126.501 Z M 650.25 126.501 A 156.618 156.618 0 0 0 661.519 113.886 A 189.78 189.78 0 0 0 667.25 106.376 Q 675.5 95.001 682.625 82.751 A 350.953 350.953 0 0 0 691.654 66.262 A 299.229 299.229 0 0 0 695.25 59.001 Q 700.75 47.501 703.75 38.376 A 94.682 94.682 0 0 0 705.2 33.57 Q 706.387 29.187 706.665 26.053 A 20.443 20.443 0 0 0 706.75 24.251 Q 706.75 21.916 706.205 21.108 A 1.315 1.315 0 0 0 706.125 21.001 Q 705.5 20.251 705 20.251 Q 703.369 20.251 699.828 24.489 A 63.401 63.401 0 0 0 698.125 26.626 A 123.844 123.844 0 0 0 694.581 31.526 Q 692.799 34.111 690.841 37.168 A 300.136 300.136 0 0 0 686.75 43.751 Q 680.25 54.501 673.5 68.251 A 457.691 457.691 0 0 0 661.008 96.065 A 498.109 498.109 0 0 0 660.625 97.001 A 309.406 309.406 0 0 0 651.412 122.641 A 278.991 278.991 0 0 0 650.25 126.501 Z M 590.5 151.251 Q 596.75 142.001 600.875 131.876 A 59.868 59.868 0 0 0 603.836 122.631 A 44.338 44.338 0 0 0 605 112.751 A 39.342 39.342 0 0 0 604.837 109.028 Q 604.411 104.565 602.875 102.126 A 9.077 9.077 0 0 0 601.514 100.42 A 5.604 5.604 0 0 0 597.5 98.751 Q 592.5 98.751 587.25 106.001 Q 582 113.251 582 124.251 A 52.471 52.471 0 0 0 583.994 138.415 A 58.439 58.439 0 0 0 584.125 138.876 A 37.356 37.356 0 0 0 586.781 145.657 A 29.345 29.345 0 0 0 590.5 151.251 Z M 460.727 71.268 A 13.635 13.635 0 0 0 465.25 72.001 A 15.688 15.688 0 0 0 471.594 70.674 A 19.239 19.239 0 0 0 476.375 67.626 A 21.958 21.958 0 0 0 477.94 66.159 Q 479.297 64.748 480.137 63.3 A 9.46 9.46 0 0 0 481.5 58.501 A 13.375 13.375 0 0 0 481.404 56.854 Q 481.264 55.728 480.92 54.829 A 5.252 5.252 0 0 0 479.25 52.501 A 7.222 7.222 0 0 0 478.283 51.867 Q 477.152 51.248 475.726 50.972 A 13.051 13.051 0 0 0 473.25 50.751 A 20.02 20.02 0 0 0 466.366 52.012 A 27.283 27.283 0 0 0 461.125 54.626 Q 455 58.501 455 63.751 A 10.068 10.068 0 0 0 455.101 65.206 A 6.536 6.536 0 0 0 458.125 70.001 A 12.376 12.376 0 0 0 460.727 71.268 Z"/>
    </>
  );
}
function WordmarkPaths2() {
  return (
    <>
    <path d="M 13.098 199.945 A 50.821 50.821 0 0 0 26.75 201.751 A 89.125 89.125 0 0 0 33.342 201.507 A 95.84 95.84 0 0 0 61.625 194.876 Q 79 188.001 94.25 175.626 Q 109.5 163.251 121.375 146.626 Q 133.25 130.001 140 110.126 Q 146.75 90.251 146.75 68.501 A 107.668 107.668 0 0 0 146.011 55.71 A 85.659 85.659 0 0 0 140.5 33.751 Q 134.25 18.251 120.625 9.126 A 45.917 45.917 0 0 0 113.3 5.152 Q 106.847 2.358 98.92 1.079 A 90.685 90.685 0 0 0 84.5 0.001 Q 68.5 0.001 54.25 4.626 A 110.551 110.551 0 0 0 45.467 7.884 A 90.654 90.654 0 0 0 29.125 16.751 A 77.868 77.868 0 0 0 20.245 23.83 A 56.958 56.958 0 0 0 12.125 33.126 A 38.728 38.728 0 0 0 8.216 40.179 A 27.267 27.267 0 0 0 6 50.751 A 18.938 18.938 0 0 0 6.023 51.684 A 14.896 14.896 0 0 0 9.375 60.626 Q 11.854 63.656 16.961 64.46 A 26.024 26.024 0 0 0 21 64.751 A 26.358 26.358 0 0 1 20.934 64.517 Q 20.706 63.688 20.504 62.751 A 43.624 43.624 0 0 1 20.125 60.751 Q 19.913 59.481 19.821 57.972 A 40.606 40.606 0 0 1 19.75 55.501 Q 19.75 41.751 27.25 30.751 A 49.663 49.663 0 0 1 33.949 22.844 A 55.951 55.951 0 0 1 47.75 13.251 A 59.355 59.355 0 0 1 59.747 8.808 A 69.993 69.993 0 0 1 77 6.751 A 66.321 66.321 0 0 1 86.604 7.424 A 51.07 51.07 0 0 1 103.75 13.001 Q 115.25 19.251 121.75 32.376 A 52.141 52.141 0 0 1 124.37 38.714 Q 126.406 44.692 127.374 51.841 A 103.89 103.89 0 0 1 128.25 65.751 Q 128.25 84.251 122.875 102.876 Q 117.5 121.501 107.75 138.126 Q 98 154.751 85.125 167.626 Q 72.25 180.501 57.375 187.876 Q 42.5 195.251 26.5 195.251 Q 24 195.251 21.625 195.001 A 88.855 88.855 0 0 1 21.568 194.995 Q 19.208 194.745 15.75 194.251 Q 19.75 176.251 25.75 154.251 A 1156.274 1156.274 0 0 1 27.27 148.734 A 1267.514 1267.514 0 0 1 39 109.126 Q 46.25 86.001 54.125 64.251 A 820.412 820.412 0 0 1 61.969 43.439 A 639.906 639.906 0 0 1 69.75 24.501 A 15.066 15.066 0 0 0 67.016 22.93 A 10.613 10.613 0 0 0 62.75 22.001 A 9.526 9.526 0 0 0 58.527 22.988 A 12.415 12.415 0 0 0 55.75 24.876 A 28.638 28.638 0 0 0 54.16 26.396 A 32.116 32.116 0 0 0 50 31.751 A 74.675 74.675 0 0 0 48.653 33.991 A 63.825 63.825 0 0 0 45.75 39.626 Q 44 43.501 43.25 45.501 Q 41.938 49.064 39.781 55.157 A 2082.054 2082.054 0 0 0 38.25 59.501 A 715.499 715.499 0 0 0 37.321 62.162 Q 35.906 66.242 34.356 70.857 A 1294.059 1294.059 0 0 0 31 81.001 A 1641.017 1641.017 0 0 0 26.906 93.72 A 2016.714 2016.714 0 0 0 22.625 107.376 Q 18.25 121.501 14 136.126 A 1180.432 1180.432 0 0 0 13.471 137.951 A 1079.295 1079.295 0 0 0 6.125 164.626 A 598.449 598.449 0 0 0 2.781 178.032 A 473.012 473.012 0 0 0 0 190.501 A 28.902 28.902 0 0 0 3.15 194.233 A 21.216 21.216 0 0 0 12 199.626 A 47.632 47.632 0 0 0 13.098 199.945 Z M 260.75 139.501 L 263.25 142.001 A 93.217 93.217 0 0 1 254.613 159.028 A 81.369 81.369 0 0 1 249.75 165.751 A 80.198 80.198 0 0 1 241.219 174.876 A 61.009 61.009 0 0 1 232.125 181.751 A 42.85 42.85 0 0 1 224.282 185.579 A 30.894 30.894 0 0 1 213.75 187.501 Q 207.125 187.501 203.001 184.68 A 13.125 13.125 0 0 1 200.125 182.001 A 20.403 20.403 0 0 1 196.744 175.969 A 18.117 18.117 0 0 1 195.75 170.001 A 21.507 21.507 0 0 1 195.809 168.46 Q 195.871 167.593 196 166.626 Q 196.25 164.751 196.5 162.751 A 192.487 192.487 0 0 1 189.964 171.106 Q 186.477 175.303 183.211 178.647 A 77.312 77.312 0 0 1 176.875 184.501 Q 168 191.751 158.75 191.751 Q 151 191.751 145.625 186.626 A 15.959 15.959 0 0 1 141.552 180.035 Q 140.25 176.169 140.25 171.001 Q 140.25 162.001 144.25 151.626 A 94.494 94.494 0 0 1 151.889 136.284 A 110.943 110.943 0 0 1 155.25 131.126 Q 162.25 121.001 171.125 112.626 A 83.874 83.874 0 0 1 183.801 102.706 A 72.97 72.97 0 0 1 189.875 99.251 Q 199.75 94.251 209.5 94.251 A 30.567 30.567 0 0 1 217.115 95.155 A 23.008 23.008 0 0 1 225.75 99.376 A 16.275 16.275 0 0 1 232.172 111.182 A 20.879 20.879 0 0 1 232.25 113.001 A 18.032 18.032 0 0 1 232.026 115.958 Q 231.768 117.501 231.216 118.695 A 6.625 6.625 0 0 1 228.875 121.501 Q 225.5 123.751 220 123.751 A 45.811 45.811 0 0 0 220.523 121.383 A 57.666 57.666 0 0 0 220.875 119.376 Q 221.25 117.001 221.25 115.001 A 20.12 20.12 0 0 0 220.666 110.046 A 15.788 15.788 0 0 0 218.5 105.126 A 8.648 8.648 0 0 0 213.824 101.682 Q 212.295 101.182 210.41 101.049 A 20.075 20.075 0 0 0 209 101.001 Q 202.185 101.001 195.132 105.623 A 38.568 38.568 0 0 0 194.75 105.876 A 59.227 59.227 0 0 0 186.861 112.284 A 79.101 79.101 0 0 0 180.75 118.876 Q 174 127.001 168.75 136.501 A 113.291 113.291 0 0 0 162.711 149.154 A 96.251 96.251 0 0 0 160.5 155.251 A 70.686 70.686 0 0 0 158.558 162.437 Q 157.5 167.447 157.5 171.751 Q 157.5 181.501 164.25 181.501 A 14.553 14.553 0 0 0 169.28 180.545 Q 171.342 179.787 173.517 178.428 A 34.857 34.857 0 0 0 176.75 176.126 A 83.974 83.974 0 0 0 183.161 170.428 Q 186.351 167.304 189.621 163.543 A 142.302 142.302 0 0 0 190.625 162.376 Q 197.75 154.001 204.25 145.001 Q 210.75 136.001 215.75 128.501 Q 216.604 127.22 216.911 127.033 A 0.181 0.181 0 0 1 217 127.001 A 17.48 17.48 0 0 1 218.023 127.206 Q 219.161 127.467 220.66 127.934 A 56.614 56.614 0 0 1 220.875 128.001 A 16.165 16.165 0 0 1 223.333 128.995 A 12.966 12.966 0 0 1 225 130.001 A 4.521 4.521 0 0 1 226.066 131.044 A 3.7 3.7 0 0 1 226.75 133.251 Q 226.75 135.501 224.5 139.376 A 364.752 364.752 0 0 0 222.281 143.256 Q 221.126 145.303 219.863 147.592 A 612.352 612.352 0 0 0 219.5 148.251 Q 216.75 153.251 214.5 158.376 A 29.248 29.248 0 0 0 212.962 162.741 Q 212.294 165.299 212.253 167.684 A 18.135 18.135 0 0 0 212.25 168.001 A 14.647 14.647 0 0 0 213.57 174.012 A 17.897 17.897 0 0 0 214.25 175.376 A 6.805 6.805 0 0 0 216.674 177.978 Q 218.359 179.001 220.75 179.001 A 12.837 12.837 0 0 0 225.132 178.131 Q 229.15 176.661 234.237 172.707 A 78.884 78.884 0 0 0 238.5 169.126 Q 246.346 162.083 254.319 150.016 A 186.927 186.927 0 0 0 260.75 139.501 Z M 362.25 140.501 L 365.5 143.001 A 68.435 68.435 0 0 1 362.317 149.38 Q 358.689 155.729 354.624 158.869 A 17.531 17.531 0 0 1 353.375 159.751 Q 347.85 163.296 342.759 163.884 A 17.487 17.487 0 0 1 340.75 164.001 A 18.565 18.565 0 0 1 332.76 162.308 A 18.414 18.414 0 0 1 327 158.001 A 23.08 23.08 0 0 1 323.15 152.095 Q 321.822 149.243 320.912 145.694 A 55.663 55.663 0 0 1 319.75 139.751 Q 313.75 152.001 305.625 163.376 A 121.912 121.912 0 0 1 297.344 173.782 A 91.068 91.068 0 0 1 288.75 182.251 A 40.891 40.891 0 0 1 283.354 186.206 Q 280.267 188.076 277.278 188.959 A 18.555 18.555 0 0 1 272 189.751 Q 264.25 189.751 261.25 182.126 Q 258.25 174.501 258.25 162.251 A 12.176 12.176 0 0 1 258.254 162.019 Q 258.277 161.001 258.441 156.129 A 5356.06 5356.06 0 0 1 258.5 154.376 Q 258.73 147.585 259.596 132.206 A 3348.863 3348.863 0 0 1 259.75 129.501 A 89.087 89.087 0 0 1 260.022 126.481 Q 260.476 122.294 261.198 120.384 A 7.494 7.494 0 0 1 261.25 120.251 A 3.124 3.124 0 0 1 262.718 118.68 Q 264.398 117.751 267.75 117.751 A 17.32 17.32 0 0 1 269.46 117.829 Q 271.205 118.003 272.202 118.566 A 2.726 2.726 0 0 1 273.125 119.376 A 4.328 4.328 0 0 1 273.643 120.46 Q 274.244 122.244 274.25 125.679 A 39.738 39.738 0 0 1 274.25 125.751 A 146.307 146.307 0 0 1 274.092 132.343 Q 273.927 135.987 273.591 140.069 A 273.938 273.938 0 0 1 273.125 145.126 A 225.136 225.136 0 0 0 272.165 158.335 A 183.173 183.173 0 0 0 272 166.001 Q 272 171.853 272.814 175.181 A 13.231 13.231 0 0 0 273.25 176.626 A 6.459 6.459 0 0 0 274.108 178.253 Q 275.411 180.001 277.75 180.001 A 9.646 9.646 0 0 0 281.38 179.235 Q 284.377 178.019 287.75 174.876 Q 293.25 169.751 299 161.376 A 194.644 194.644 0 0 0 309.232 144.684 A 213.64 213.64 0 0 0 309.875 143.501 A 330.835 330.835 0 0 0 315.842 131.919 A 278.194 278.194 0 0 0 319 125.251 A 155.847 155.847 0 0 1 319.344 118.358 Q 320.184 107.021 322.625 102.626 A 15.483 15.483 0 0 1 324.4 100.035 Q 327.012 97.001 330.5 97.001 A 10.46 10.46 0 0 1 333.205 97.329 A 6.838 6.838 0 0 1 337.375 100.376 Q 338.853 102.724 339.303 104.769 A 8.055 8.055 0 0 1 339.5 106.501 Q 339.5 109.638 337.52 113.008 A 19.549 19.549 0 0 1 337.375 113.251 Q 335.25 116.751 333 122.751 Q 330.75 128.751 330.75 140.001 A 48.108 48.108 0 0 0 331.043 145.197 A 58.678 58.678 0 0 0 331.5 148.501 A 17.807 17.807 0 0 0 332.588 152.39 A 13.89 13.89 0 0 0 334.75 156.001 Q 337.25 159.001 342.5 159.001 A 13.983 13.983 0 0 0 349.229 157.225 A 20.04 20.04 0 0 0 352.625 154.876 A 22.863 22.863 0 0 0 355.66 151.7 Q 358.984 147.548 362.25 140.501 Z M 445.75 139.501 L 448.75 141.751 A 96.748 96.748 0 0 1 437.174 161.247 A 86.349 86.349 0 0 1 431.625 167.751 A 86.798 86.798 0 0 1 417.973 179.597 A 74.338 74.338 0 0 1 409.125 184.876 A 65.291 65.291 0 0 1 408.936 184.972 Q 396.902 191.001 384.5 191.001 A 44.126 44.126 0 0 1 375.713 190.183 Q 370.599 189.143 366.69 186.78 A 22.663 22.663 0 0 1 361.625 182.626 A 29.06 29.06 0 0 1 354.056 164.078 A 37.825 37.825 0 0 1 354 162.001 A 50.92 50.92 0 0 1 355.78 148.949 A 69.383 69.383 0 0 1 359.625 138.251 Q 365.25 125.751 374.625 114.751 A 90.099 90.099 0 0 1 388.402 101.576 A 79.209 79.209 0 0 1 395.25 96.876 A 50.737 50.737 0 0 1 405.046 92.177 A 37.788 37.788 0 0 1 417.5 90.001 Q 423.25 90.001 428.125 93.001 Q 432.981 95.989 433 105.178 A 34.911 34.911 0 0 1 433 105.251 A 31.327 31.327 0 0 1 427.806 122.47 A 37.949 37.949 0 0 1 427.375 123.126 A 55.78 55.78 0 0 1 416.969 134.634 A 66.662 66.662 0 0 1 412.625 138.001 Q 403.5 144.501 392.625 148.626 Q 381.75 152.751 371 153.751 Q 370.5 156.251 370.25 158.501 A 41.361 41.361 0 0 0 370.035 161.216 A 34.33 34.33 0 0 0 370 162.751 Q 370 166.501 370.875 170.251 Q 371.75 174.001 374 177.126 A 14.467 14.467 0 0 0 378.729 181.297 A 17.753 17.753 0 0 0 380.125 182.001 A 18.245 18.245 0 0 0 384.022 183.228 Q 385.879 183.604 388.026 183.71 A 35.044 35.044 0 0 0 389.75 183.751 A 39.759 39.759 0 0 0 405.734 180.306 A 50.151 50.151 0 0 0 411 177.626 Q 421.5 171.501 430.5 161.501 Q 439.5 151.501 445.75 139.501 Z M 372.25 149.001 A 85.06 85.06 0 0 0 378.374 146.675 Q 382.652 144.871 387.5 142.376 Q 396 138.001 403.875 132.001 A 64.72 64.72 0 0 0 412.932 123.694 A 55.263 55.263 0 0 0 416.875 118.751 A 28.697 28.697 0 0 0 420.758 111.195 A 24.359 24.359 0 0 0 422 103.501 Q 422 101.697 421.569 100.43 A 5.039 5.039 0 0 0 421 99.251 A 2.78 2.78 0 0 0 419.846 98.294 Q 418.886 97.837 417.348 97.765 A 12.745 12.745 0 0 0 416.75 97.751 A 17.984 17.984 0 0 0 410.762 98.836 Q 407.48 99.991 404 102.376 A 57.749 57.749 0 0 0 396.564 108.489 A 75.593 75.593 0 0 0 391 114.501 Q 384.75 122.001 379.75 131.001 A 86.533 86.533 0 0 0 374.057 143.376 A 75.107 75.107 0 0 0 372.25 149.001 Z"/>
    </>
  );
}


export function WordmarkHoverEffect() {
  const containerRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });

  useEffect(() => {
    if (containerRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = containerRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  return (
    <svg
      ref={containerRef}
      className="size-full select-none"
      viewBox="0 0 770 387"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
    >
      <defs>
        <linearGradient
          id="logoGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"var(--color-yellow-500)"} />
              <stop offset="25%" stopColor={"var(--color-red-500)"} />
              <stop offset="50%" stopColor={"var(--color-blue-500)"} />
              <stop offset="75%" stopColor={"var(--color-cyan-500)"} />
              <stop offset="100%" stopColor={"var(--color-violet-500)"} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="15%"
          animate={maskPosition}
          transition={{ duration: 0, ease: "easeInOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask
          id="logoMask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="770"
          height="387"
          fill="black"
        >
          <rect fill="url(#revealMask)" width="770" height="387" />
          <WordmarkPaths />
        </mask>

        <mask
          id="pathOutsideMask"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="770"
          height="387"
          fill="black"
        >
          <rect fill="white" width="770" height="387" />
          <WordmarkPaths />
        </mask>

        <defs>
          <mask id="logoMask2" maskUnits="userSpaceOnUse" x="0" y="0" width="770" height="387">
            <rect fill="url(#revealMask)" width="770" height="387" />
            <WordmarkPaths2 />
          </mask>
        </defs>

        <g className="fill-transparent" stroke="url(#logoGradient)" strokeWidth="2" mask="url(#logoMask2)">
          <WordmarkPaths2 />
        </g>
      </defs>

      <g
        className="stroke-border fill-transparent"
        strokeWidth="2"
        mask="url(#pathOutsideMask)"
      >
        <WordmarkPaths />
        <g transform="translate(120, 200)">
         <WordmarkPaths2 />
        </g>

      </g>
      <g
        className="fill-transparent"
        stroke="url(#logoGradient)"
        strokeWidth="2"
        mask="url(#logoMask)"
      >
        <WordmarkPaths />
        <g transform="translate(120, 200)">
          <WordmarkPaths2 />
        </g>
        
      </g>
    </svg>
  );
}

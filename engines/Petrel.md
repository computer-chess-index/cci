# Engine: Petrel

Author: Aleks Peshkov

Home: https://github.com/AleksPeshkov/petrel

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.0 | 2026-08-04 | 3128<sub>(+112) | 3337<sub>(+147) | 3368<sub>(+102) |  |
| 3.5 | 2026-06-02 | 3016<sub>(+97) | 3190<sub>(+53) | 3266<sub>(+96) |  |
| 3.3.1 | 2026-02-10 | 2919<sub>(-25) | 3137<sub>(-30) | 3170<sub>(-17) |  |
| 3.3 | 2026-02-09 | 2944<sub>(+31) | 3167<sub>(+58) | 3187<sub>(+24) |  |
| 3.2 | 2025-12-21 | 2913<sub>(+86) | 3109<sub>(+100) | 3163<sub>(+69) |  |
| 3.1 | 2025-11-28 | 2827<sub>(+76) | 3009<sub>(+71) | 3094<sub>(+132) |  |
| 3.0 | 2025-11-26 | 2751<sub>(+532) | 2938<sub>(+535) | 2962<sub>(+485) |  |
| 2.1 | 2025-10-13 | 2219 | 2403 | 2477 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Petrel+<version>&body=###%20Engine%20name%0APetrel%0A%0A###%20Version%0A4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-22 06:27:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.1", "3.0", "3.1", "3.2", "3.3", "3.3.1", "3.5", "4.0"]
  y-axis "Elo Rating" 2200 --> 3400
  line "STC (8.0+0.08s)" [2219, 2751, 2827, 2913, 2944, 2919, 3016, 3128]
  line "STC (8.0+0.08s)" [2219, 2751, 2827, 2913, 2944, 2919, 3016, 3128]
  line "LTC (60.0+0.60s)" [2403, 2938, 3009, 3109, 3167, 3137, 3190, 3337]
  line "VLTC (2m24s+1.12s)" [2477, 2962, 3094, 3163, 3187, 3170, 3266, 3368]
  line "VLTC (2m24s+1.12s)" [2477, 2962, 3094, 3163, 3187, 3170, 3266, 3368]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3368 | 29 | 298 | 51% | 3363 | 73% |
| 4.0 | LTC <sub>(60.0+0.60s)</sub> | 3337 | 30 | 270 | 51% | 3333 | 73% |
| 4.0 | STC <sub>(8.0+0.08s)</sub> | 3128 | 32 | 264 | 48% | 3137 | 58% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.5 | VLTC <sub>(2m24s+1.12s)</sub> | 3266 | 27 | 368 | 49% | 3272 | 65% |
| 3.5 | LTC <sub>(60.0+0.60s)</sub> | 3190 | 27 | 364 | 51% | 3178 | 61% |
| 3.5 | STC <sub>(8.0+0.08s)</sub> | 3016 | 28 | 364 | 49% | 3023 | 53% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3170 | 35 | 228 | 52% | 3154 | 53% |
| 3.3.1 | LTC <sub>(60.0+0.60s)</sub> | 3137 | 42 | 158 | 53% | 3119 | 56% |
| 3.3.1 | STC <sub>(8.0+0.08s)</sub> | 2919 | 41 | 170 | 49% | 2930 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3187 | 104 | 24 | 58% | 3124 | 58% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3167 | 102 | 24 | 54% | 3131 | 67% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2944 | 110 | 24 | 50% | 2947 | 42% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 3163 | 35 | 226 | 49% | 3174 | 58% |
| 3.2 | LTC <sub>(60.0+0.60s)</sub> | 3109 | 33 | 260 | 52% | 3093 | 56% |
| 3.2 | STC <sub>(8.0+0.08s)</sub> | 2913 | 33 | 264 | 50% | 2915 | 46% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3094 | 35 | 232 | 51% | 3087 | 53% |
| 3.1 | LTC <sub>(60.0+0.60s)</sub> | 3009 | 36 | 212 | 52% | 2992 | 54% |
| 3.1 | STC <sub>(8.0+0.08s)</sub> | 2827 | 37 | 224 | 48% | 2846 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2962 | 51 | 128 | 57% | 2884 | 34% |
| 3.0 | LTC <sub>(60.0+0.60s)</sub> | 2938 | 43 | 184 | 59% | 2849 | 33% |
| 3.0 | STC <sub>(8.0+0.08s)</sub> | 2751 | 56 | 108 | 53% | 2708 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2477 | 57 | 110 | 48% | 2508 | 25% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2403 | 58 | 108 | 48% | 2423 | 17% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2219 | 62 | 88 | 51% | 2213 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
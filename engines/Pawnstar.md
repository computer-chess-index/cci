# Engine: Pawnstar

Author: Jonny Reckless

Home: https://github.com/jonny-reckless/pawnstar

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2782<sub>(-65) | 3137<sub>(-2) | 3237<sub>(+24) |  |
| 2.3.0 | 2026-11-08 | 2847<sub>(+52) | 3139<sub>(-4) | 3213<sub>(+4) |  |
| 2.2.0 | 2026-11-07 | 2795<sub>(+5) | 3143<sub>(+16) | 3209<sub>(-30) |  |
| 2.1.0 | 2026-10-31 | 2790<sub>(-22) | 3127<sub>(-40) | 3239<sub>(+44) |  |
| 1.0.0 | 2026-10-15 | 2812<sub>(+81) | 3167<sub>(+80) | 3195<sub>(+8) |  |
| 0.13.593 | 2026-06-30 | 2731 | 3087 | 3187 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.1 | 2026-11-09 | 2763<sub>(-14) | 3148<sub>(+43) | 3193<sub>(-1) |  |
| 2.3.0 | 2026-11-08 | 2777<sub>(+9) | 3105<sub>(-31) | 3194<sub>(+12) |  |
| 2.2.0 | 2026-11-07 | 2768<sub>(-6) | 3136<sub>(+1) | 3182<sub>(-9) |  |
| 2.1.0 | 2026-10-31 | 2774<sub>(-41) | 3135<sub>(+18) | 3191<sub>(-19) |  |
| 1.0.0 | 2026-10-15 | 2815<sub>(+73) | 3117<sub>(-12) | 3210<sub>(+69) |  |
| 0.13.593 | 2026-06-30 | 2742 | 3129 | 3141 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.13.593 | 2026-06-30 | 2831 | 3125 | 3200 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Pawnstar+<version>&body=###%20Engine%20name%0APawnstar%0A%0A###%20Version%0A0.13.593" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU for P1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - P-Core<br>
CPU for E1: Intel(R) Core(TM) Ultra 7 265T (1.50 GHz) - E-Core<br>
CPU for T1: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-11-15 05:40:52

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.13.593", "1.0.0", "2.1.0", "2.2.0", "2.3.0", "2.3.1"]
  y-axis "Elo Rating" 2700 --> 3300
  line "E1: STC (8.0+0.08s)" [2731, 2812, 2790, 2795, 2847, 2782]
  line "E1: LTC (60.0+0.60s)" [3087, 3167, 3127, 3143, 3139, 3137]
  line "E1: VLTC (2m24s+1.12s)" [3187, 3195, 3239, 3209, 3213, 3237]
  line "P1: STC (8.0+0.08s)" [2742, 2815, 2774, 2768, 2777, 2763]
  line "P1: LTC (60.0+0.60s)" [3129, 3117, 3135, 3136, 3105, 3148]
  line "P1: VLTC (2m24s+1.12s)" [3141, 3210, 3191, 3182, 3194, 3193]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3193 | 38 | 184 | 49% | 3200 | 60% |
|  |  | E1 | 3237 | 30 | 292 | 51% | 3228 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3148 | 44 | 140 | 49% | 3158 | 60% |
|  |  | E1 | 3137 | 30 | 300 | 52% | 3121 | 56% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2763 | 48 | 140 | 49% | 2774 | 34% |
|  |  | E1 | 2782 | 32 | 314 | 47% | 2803 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3194 | 44 | 140 | 49% | 3204 | 59% |
|  |  | E1 | 3213 | 36 | 208 | 49% | 3222 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3105 | 38 | 186 | 52% | 3089 | 58% |
|  |  | E1 | 3139 | 32 | 260 | 46% | 3171 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2847 | 32 | 300 | 47% | 2873 | 42% |
|  |  | P1 | 2777 | 35 | 254 | 45% | 2819 | 41% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3182 | 38 | 178 | 53% | 3162 | 63% |
|  |  | E1 | 3209 | 32 | 262 | 51% | 3205 | 57% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3136 | 48 | 116 | 48% | 3150 | 60% |
|  |  | E1 | 3143 | 32 | 280 | 53% | 3121 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2768 | 50 | 126 | 51% | 2757 | 36% |
|  |  | E1 | 2795 | 32 | 292 | 53% | 2768 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3239 | 28 | 340 | 53% | 3216 | 64% |
|  |  | P1 | 3191 | 34 | 232 | 47% | 3210 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3135 | 41 | 152 | 49% | 3141 | 63% |
|  |  | E1 | 3127 | 29 | 344 | 54% | 3097 | 51% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2774 | 38 | 212 | 45% | 2820 | 40% |
|  |  | E1 | 2790 | 37 | 228 | 49% | 2800 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3210 | 40 | 160 | 50% | 3214 | 66% |
|  |  | E1 | 3195 | 34 | 232 | 50% | 3193 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3117 | 39 | 180 | 50% | 3113 | 58% |
|  |  | E1 | 3167 | 32 | 276 | 51% | 3160 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2815 | 39 | 198 | 52% | 2796 | 45% |
|  |  | E1 | 2812 | 28 | 394 | 47% | 2838 | 40% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 0.13.593 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3187 | 30 | 312 | 47% | 3208 | 51% |
|  |  | T1 | 3200 | 26 | 432 | 50% | 3189 | 53% |
|  |  | P1 | 3141 | 35 | 220 | 46% | 3171 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3087 | 31 | 300 | 48% | 3106 | 53% |
|  |  | T1 | 3125 | 26 | 450 | 52% | 3089 | 48% |
|  |  | P1 | 3129 | 34 | 248 | 52% | 3109 | 49% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2831 | 28 | 436 | 49% | 2822 | 32% |
|  |  | P1 | 2742 | 41 | 192 | 46% | 2780 | 35% |
|  |  | E1 | 2731 | 30 | 382 | 46% | 2769 | 31% |
# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3183<sub>(-10) | 3405<sub>(+2) | 3447<sub>(-25) |  |
| 5.0 | 2026-11-02 | 3193<sub>(+403) | 3403<sub>(+251) | 3472<sub>(+218) |  |
| 4.1 | 2026-08-06 | 2790 | 3152 | 3254 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3178<sub>(+20) | 3413<sub>(+64) | 3403<sub>(+21) |  |
| 5.0 | 2026-11-02 | 3158<sub>(+390) | 3349<sub>(+222) | 3382<sub>(+155) |  |
| 4.1 | 2026-08-06 | 2768 | 3127 | 3227 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 4.1 | 2026-08-06 | 2871 | 3163 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+NarcNext+<version>&body=###%20Engine%20name%0ANarcNext%0A%0A###%20Version%0A4.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-19 05:40:43

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2790, 3193, 3183]
  line "E1: LTC (60.0+0.60s)" [3152, 3403, 3405]
  line "E1: VLTC (2m24s+1.12s)" [3254, 3472, 3447]
  line "P1: STC (8.0+0.08s)" [2768, 3158, 3178]
  line "P1: LTC (60.0+0.60s)" [3127, 3349, 3413]
  line "P1: VLTC (2m24s+1.12s)" [3227, 3382, 3403]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3403 | 46 | 110 | 50% | 3401 | 83% |
|  |  | E1 | 3447 | 31 | 246 | 51% | 3437 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3413 | 44 | 128 | 50% | 3414 | 73% |
|  |  | E1 | 3405 | 33 | 230 | 51% | 3399 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3183 | 30 | 302 | 51% | 3175 | 63% |
|  |  | P1 | 3178 | 40 | 160 | 48% | 3195 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3382 | 43 | 134 | 53% | 3364 | 72% |
|  |  | E1 | 3472 | 32 | 248 | 54% | 3441 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3349 | 33 | 222 | 57% | 3305 | 74% |
|  |  | E1 | 3403 | 31 | 268 | 54% | 3372 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3158 | 45 | 134 | 52% | 3135 | 58% |
|  |  | E1 | 3193 | 30 | 304 | 52% | 3147 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3227 | 31 | 276 | 48% | 3240 | 57% |
|  |  | E1 | 3254 | 27 | 378 | 47% | 3275 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3127 | 35 | 226 | 49% | 3135 | 56% |
|  |  | E1 | 3152 | 28 | 372 | 48% | 3166 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2768 | 37 | 236 | 46% | 2811 | 38% |
|  |  | E1 | 2790 | 29 | 386 | 45% | 2838 | 37% |
|  |  | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
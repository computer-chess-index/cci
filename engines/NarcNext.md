# Engine: NarcNext

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3185<sub>(-9) | 3406<sub>(+1) | 3448<sub>(-27) |  |
| 5.0 | 2026-11-02 | 3194<sub>(+404) | 3405<sub>(+250) | 3475<sub>(+219) |  |
| 4.1 | 2026-08-06 | 2790 | 3155 | 3256 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3182<sub>(+22) | 3418<sub>(+65) | 3407<sub>(+21) |  |
| 5.0 | 2026-11-02 | 3160<sub>(+392) | 3353<sub>(+224) | 3386<sub>(+157) |  |
| 4.1 | 2026-08-06 | 2768 | 3129 | 3229 |  |
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

Generated: 2026-11-18 05:40:58

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2790, 3194, 3185]
  line "E1: LTC (60.0+0.60s)" [3155, 3405, 3406]
  line "E1: VLTC (2m24s+1.12s)" [3256, 3475, 3448]
  line "P1: STC (8.0+0.08s)" [2768, 3160, 3182]
  line "P1: LTC (60.0+0.60s)" [3129, 3353, 3418]
  line "P1: VLTC (2m24s+1.12s)" [3229, 3386, 3407]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3407 | 46 | 110 | 50% | 3405 | 83% |
|  |  | E1 | 3448 | 32 | 242 | 51% | 3440 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3418 | 44 | 128 | 50% | 3420 | 73% |
|  |  | E1 | 3406 | 33 | 230 | 51% | 3401 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3182 | 40 | 160 | 48% | 3198 | 63% |
|  |  | E1 | 3185 | 30 | 302 | 51% | 3178 | 63% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3386 | 43 | 134 | 53% | 3368 | 72% |
|  |  | E1 | 3475 | 32 | 248 | 54% | 3443 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3353 | 33 | 222 | 57% | 3309 | 74% |
|  |  | E1 | 3405 | 31 | 268 | 54% | 3374 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3194 | 30 | 304 | 52% | 3148 | 57% |
|  |  | P1 | 3160 | 45 | 134 | 52% | 3137 | 58% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3229 | 31 | 276 | 48% | 3243 | 57% |
|  |  | E1 | 3256 | 27 | 378 | 47% | 3278 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3129 | 35 | 226 | 49% | 3137 | 56% |
|  |  | E1 | 3155 | 28 | 372 | 48% | 3167 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2768 | 37 | 236 | 46% | 2811 | 38% |
|  |  | E1 | 2790 | 29 | 386 | 45% | 2838 | 37% |
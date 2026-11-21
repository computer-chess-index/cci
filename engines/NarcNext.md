# Engine: NarcNext

Author: Madushan B. Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3181<sub>(-12) | 3405<sub>(0) | 3448<sub>(-26) |  |
| 5.0 | 2026-11-02 | 3193<sub>(+403) | 3405<sub>(+251) | 3474<sub>(+219) |  |
| 4.1 | 2026-08-06 | 2790 | 3154 | 3255 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3189<sub>(+26) | 3411<sub>(+54) | 3410<sub>(+21) |  |
| 5.0 | 2026-11-02 | 3163<sub>(+386) | 3357<sub>(+220) | 3389<sub>(+153) |  |
| 4.1 | 2026-08-06 | 2777 | 3137 | 3236 |  |
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

Generated: 2026-11-21 05:40:26

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2790, 3193, 3181]
  line "E1: LTC (60.0+0.60s)" [3154, 3405, 3405]
  line "E1: VLTC (2m24s+1.12s)" [3255, 3474, 3448]
  line "P1: STC (8.0+0.08s)" [2777, 3163, 3189]
  line "P1: LTC (60.0+0.60s)" [3137, 3357, 3411]
  line "P1: VLTC (2m24s+1.12s)" [3236, 3389, 3410]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3410 | 46 | 110 | 50% | 3407 | 83% |
|  |  | E1 | 3448 | 31 | 246 | 51% | 3438 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3411 | 42 | 140 | 49% | 3421 | 74% |
|  |  | E1 | 3405 | 32 | 238 | 51% | 3401 | 71% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3189 | 40 | 160 | 48% | 3206 | 63% |
|  |  | E1 | 3181 | 29 | 310 | 50% | 3183 | 62% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3389 | 43 | 134 | 53% | 3372 | 72% |
|  |  | E1 | 3474 | 32 | 248 | 54% | 3441 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3357 | 33 | 230 | 56% | 3314 | 75% |
|  |  | E1 | 3405 | 31 | 268 | 54% | 3372 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3163 | 43 | 150 | 51% | 3150 | 59% |
|  |  | E1 | 3193 | 30 | 304 | 52% | 3147 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3236 | 31 | 276 | 48% | 3249 | 57% |
|  |  | E1 | 3255 | 27 | 378 | 47% | 3276 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3137 | 35 | 226 | 49% | 3146 | 56% |
|  |  | E1 | 3154 | 28 | 372 | 48% | 3166 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2777 | 37 | 236 | 46% | 2820 | 38% |
|  |  | E1 | 2790 | 29 | 386 | 45% | 2838 | 37% |
# Engine: NarcNext

Author: Madushan B. Dissanayake

Home: https://github.com/Madushan996/NARC-NEXT

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3183<sub>(-6) | 3407<sub>(-3) | 3451<sub>(-25) |  |
| 5.0 | 2026-11-02 | 3189<sub>(+393) | 3410<sub>(+254) | 3476<sub>(+217) |  |
| 4.1 | 2026-08-06 | 2796 | 3156 | 3259 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 5.1 | 2026-11-05 | 3206<sub>(+25) | 3428<sub>(+52) | 3428<sub>(+22) |  |
| 5.0 | 2026-11-02 | 3181<sub>(+386) | 3376<sub>(+218) | 3406<sub>(+150) |  |
| 4.1 | 2026-08-06 | 2795 | 3158 | 3256 |  |
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

Generated: 2026-11-25 05:40:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["4.1", "5.0", "5.1"]
  y-axis "Elo Rating" 2700 --> 3500
  line "E1: STC (8.0+0.08s)" [2796, 3189, 3183]
  line "E1: LTC (60.0+0.60s)" [3156, 3410, 3407]
  line "E1: VLTC (2m24s+1.12s)" [3259, 3476, 3451]
  line "P1: STC (8.0+0.08s)" [2795, 3181, 3206]
  line "P1: LTC (60.0+0.60s)" [3158, 3376, 3428]
  line "P1: VLTC (2m24s+1.12s)" [3256, 3406, 3428]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3428 | 46 | 110 | 50% | 3425 | 83% |
|  |  | E1 | 3451 | 31 | 250 | 51% | 3441 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3428 | 40 | 152 | 49% | 3437 | 74% |
|  |  | E1 | 3407 | 32 | 250 | 51% | 3405 | 72% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3206 | 38 | 180 | 48% | 3224 | 63% |
|  |  | E1 | 3183 | 28 | 334 | 50% | 3187 | 61% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 5.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3476 | 32 | 248 | 54% | 3445 | 73% |
|  |  | P1 | 3406 | 43 | 134 | 53% | 3390 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3376 | 33 | 230 | 56% | 3335 | 75% |
|  |  | E1 | 3410 | 30 | 288 | 54% | 3379 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3181 | 43 | 150 | 51% | 3168 | 59% |
|  |  | E1 | 3189 | 29 | 334 | 51% | 3156 | 57% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 4.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3281 | 30 | 308 | 51% | 3270 | 55% |
|  |  | P1 | 3256 | 31 | 276 | 48% | 3270 | 57% |
|  |  | E1 | 3259 | 27 | 378 | 47% | 3281 | 58% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3163 | 30 | 318 | 52% | 3150 | 54% |
|  |  | P1 | 3158 | 35 | 226 | 49% | 3166 | 56% |
|  |  | E1 | 3156 | 28 | 372 | 48% | 3170 | 47% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2871 | 28 | 392 | 50% | 2870 | 42% |
|  |  | P1 | 2795 | 37 | 236 | 46% | 2838 | 38% |
|  |  | E1 | 2796 | 29 | 386 | 45% | 2843 | 37% |
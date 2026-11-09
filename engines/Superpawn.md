# Engine: Superpawn

Author: John Byrd

Home: https://github.com/johnwbyrd/superpawn

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3235<sub>(+176) | 3432<sub>(+65) | 3524<sub>(+79) |  |
| 1.9.1 | 2026-10-18 | 3059<sub>(+210) | 3367<sub>(+185) | 3445<sub>(+194) |  |
| 1.9.0 | 2026-10-16 | 2849 | 3182 | 3251 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.2 | 2026-11-08 | 3340<sub>(+142) | 3551<sub>(+75) | 3582<sub>(+64) |  |
| 1.9.1 | 2026-10-18 | 3198<sub>(+210) | 3476<sub>(+171) | 3518<sub>(+142) |  |
| 1.9.0 | 2026-10-16 | 2988 | 3305 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.9.0 | 2026-10-16 | 2988 | 3305 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Superpawn+<version>&body=###%20Engine%20name%0ASuperpawn%0A%0A###%20Version%0A1.9.2" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:43:24

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.9.0", "1.9.1", "1.9.2"]
  y-axis "Elo Rating" 2800 --> 3600
  line "E1: STC (8.0+0.08s)" [2849, 3059, 3235]
  line "E1: LTC (60.0+0.60s)" [3182, 3367, 3432]
  line "E1: VLTC (2m24s+1.12s)" [3251, 3445, 3524]
  line "P1: STC (8.0+0.08s)" [2988, 3198, 3340]
  line "P1: LTC (60.0+0.60s)" [3305, 3476, 3551]
  line "P1: VLTC (2m24s+1.12s)" [3376, 3518, 3582]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.2 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3582 | 78 | 40 | 53% | 3565 | 70% |
|  |  | E1 | 3524 | 92 | 28 | 55% | 3488 | 75% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3551 | 68 | 52 | 54% | 3525 | 77% |
|  |  | E1 | 3432 | 83 | 36 | 54% | 3406 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3340 | 66 | 64 | 51% | 3330 | 52% |
|  |  | E1 | 3235 | 72 | 58 | 56% | 3185 | 43% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3518 | 35 | 210 | 52% | 3507 | 62% |
|  |  | E1 | 3445 | 29 | 314 | 52% | 3434 | 65% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3476 | 35 | 216 | 50% | 3474 | 58% |
|  |  | E1 | 3367 | 32 | 264 | 52% | 3352 | 55% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3198 | 42 | 160 | 51% | 3190 | 48% |
|  |  | E1 | 3059 | 31 | 336 | 54% | 3020 | 37% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3376 | 43 | 194 | 60% | 3124 | 39% |
|  |  | E1 | 3251 | 34 | 292 | 55% | 3094 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3305 | 50 | 150 | 62% | 2967 | 32% |
|  |  | E1 | 3182 | 42 | 214 | 62% | 2889 | 34% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2988 | 47 | 176 | 58% | 2755 | 26% |
|  |  | E1 | 2849 | 42 | 220 | 61% | 2595 | 26% |
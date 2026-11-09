# Engine: Simplechess

Author: Sam Moore

Home: https://github.com/LinkLikesLattes/SimpleChess

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3276<sub>(+93) | 3528<sub>(+71) | 3584<sub>(+44) |  |
| 3.6.0 | 2026-10-19 | 3183 | 3457 | 3540 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.7.0 | 2026-11-06 | 3411<sub>(+59) | 3609<sub>(+21) | 3660<sub>(+27) |  |
| 3.6.0 | 2026-10-19 | 3352 | 3588 | 3633 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6.0 | 2026-10-19 | 3352 | 3588 | 3633 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Simplechess+<version>&body=###%20Engine%20name%0ASimplechess%0A%0A###%20Version%0A3.7.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-09 05:42:48

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["3.6.0", "3.7.0"]
  y-axis "Elo Rating" 3100 --> 3700
  line "E1: STC (8.0+0.08s)" [3183, 3276]
  line "E1: LTC (60.0+0.60s)" [3457, 3528]
  line "E1: VLTC (2m24s+1.12s)" [3540, 3584]
  line "P1: STC (8.0+0.08s)" [3352, 3411]
  line "P1: LTC (60.0+0.60s)" [3588, 3609]
  line "P1: VLTC (2m24s+1.12s)" [3633, 3660]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3660 | 48 | 104 | 51% | 3654 | 73% |
|  |  | E1 | 3584 | 38 | 168 | 50% | 3580 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3609 | 43 | 132 | 47% | 3636 | 72% |
|  |  | E1 | 3528 | 36 | 200 | 49% | 3533 | 67% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3411 | 38 | 182 | 49% | 3418 | 65% |
|  |  | E1 | 3276 | 29 | 332 | 53% | 3254 | 56% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3633 | 40 | 172 | 59% | 3514 | 68% |
|  |  | E1 | 3540 | 32 | 276 | 54% | 3461 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3588 | 38 | 200 | 58% | 3433 | 63% |
|  |  | E1 | 3457 | 30 | 326 | 53% | 3378 | 53% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3352 | 37 | 244 | 57% | 3125 | 42% |
|  |  | E1 | 3183 | 33 | 298 | 57% | 2992 | 42% |
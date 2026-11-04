# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-21 | 2950<sub>(+72) | 3344<sub>(+5) | 3438<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2878<sub>(+258) | 3339<sub>(+160) | 3443<sub>(+208) |  |
| 2.9.5 | 2026-10-15 | 2620<sub>(+199) | 3179<sub>(+190) | 3235<sub>(+168) |  |
| 1.6 | 2026-10-07 | 2421 | 2989 | 3067 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.1 | 2026-10-21 | 3048<sub>(+9) | 3484<sub>(+46) | 3565<sub>(+14) |  |
| 3.0 | 2026-10-17 | 3039<sub>(+207) | 3438<sub>(+168) | 3551<sub>(+171) |  |
| 2.9.5 | 2026-10-15 | 2832<sub>(+324) | 3270<sub>(+234) | 3380<sub>(+233) |  |
| 1.6 | 2026-10-07 | 2508 | 3036 | 3147 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2508 | 3036 | 3147 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessenger+<version>&body=###%20Engine%20name%0AChessenger%0A%0A###%20Version%0A3.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-04 05:37:15

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1"]
  y-axis "Elo Rating" 2400 --> 3600
  line "E1: STC (8.0+0.08s)" [2421, 2620, 2878, 2950]
  line "E1: LTC (60.0+0.60s)" [2989, 3179, 3339, 3344]
  line "E1: VLTC (2m24s+1.12s)" [3067, 3235, 3443, 3438]
  line "P1: STC (8.0+0.08s)" [2508, 2832, 3039, 3048]
  line "P1: LTC (60.0+0.60s)" [3036, 3270, 3438, 3484]
  line "P1: VLTC (2m24s+1.12s)" [3147, 3380, 3551, 3565]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3565 | 29 | 300 | 54% | 3537 | 68% |
|  |  | E1 | 3438 | 30 | 302 | 52% | 3420 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3484 | 34 | 224 | 50% | 3488 | 62% |
|  |  | E1 | 3344 | 34 | 224 | 50% | 3348 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3048 | 51 | 112 | 49% | 3059 | 47% |
|  |  | E1 | 2950 | 34 | 276 | 49% | 2957 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3551 | 46 | 122 | 50% | 3552 | 68% |
|  |  | E1 | 3443 | 31 | 270 | 50% | 3441 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3438 | 49 | 106 | 56% | 3393 | 69% |
|  |  | E1 | 3339 | 31 | 274 | 49% | 3348 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2878 | 41 | 174 | 53% | 2849 | 45% |
|  |  | P1 | 3039 | 52 | 116 | 57% | 2981 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3380 | 37 | 196 | 52% | 3367 | 61% |
|  |  | E1 | 3235 | 34 | 244 | 50% | 3237 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3270 | 50 | 118 | 54% | 3237 | 45% |
|  |  | E1 | 3179 | 41 | 168 | 51% | 3168 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2832 | 41 | 196 | 53% | 2803 | 34% |
|  |  | E1 | 2620 | 36 | 254 | 55% | 2574 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3067 | 43 | 168 | 55% | 2998 | 43% |
|  |  | P1 | 3147 | 50 | 130 | 55% | 3078 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3036 | 57 | 116 | 63% | 2754 | 33% |
|  |  | E1 | 2989 | 40 | 218 | 57% | 2842 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2508 | 62 | 90 | 43% | 2572 | 24% |
|  |  | E1 | 2421 | 45 | 184 | 57% | 2298 | 23% |
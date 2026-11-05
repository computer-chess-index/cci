# Engine: Chessenger

Author: Dariusz Domagała

Home: https://github.com/chessengeriadoteu/chessenger

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3101<sub>(+150) | 3482<sub>(+135) | 3540<sub>(+100) |  |
| 3.1 | 2026-10-21 | 2951<sub>(+71) | 3347<sub>(+7) | 3440<sub>(-5) |  |
| 3.0 | 2026-10-17 | 2880<sub>(+258) | 3340<sub>(+159) | 3445<sub>(+208) |  |
| 2.9.5 | 2026-10-15 | 2622<sub>(+200) | 3181<sub>(+191) | 3237<sub>(+170) |  |
| 1.6 | 2026-10-07 | 2422 | 2990 | 3067 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.6 | 2026-11-01 | 3353<sub>(+271) | 3640<sub>(+121) | 3680<sub>(+82) |  |
| 3.1 | 2026-10-21 | 3082<sub>(+11) | 3519<sub>(+48) | 3598<sub>(+14) |  |
| 3.0 | 2026-10-17 | 3071<sub>(+208) | 3471<sub>(+168) | 3584<sub>(+170) |  |
| 2.9.5 | 2026-10-15 | 2863<sub>(+324) | 3303<sub>(+234) | 3414<sub>(+233) |  |
| 1.6 | 2026-10-07 | 2539 | 3069 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.6 | 2026-10-07 | 2539 | 3069 | 3181 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chessenger+<version>&body=###%20Engine%20name%0AChessenger%0A%0A###%20Version%0A3.6" target="_blank">Submit new version</a>

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

Generated: 2026-11-05 05:37:07

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.9.5", "3.0", "3.1", "3.6"]
  y-axis "Elo Rating" 2400 --> 3700
  line "E1: STC (8.0+0.08s)" [2422, 2622, 2880, 2951, 3101]
  line "E1: LTC (60.0+0.60s)" [2990, 3181, 3340, 3347, 3482]
  line "E1: VLTC (2m24s+1.12s)" [3067, 3237, 3445, 3440, 3540]
  line "P1: STC (8.0+0.08s)" [2539, 2863, 3071, 3082, 3353]
  line "P1: LTC (60.0+0.60s)" [3069, 3303, 3471, 3519, 3640]
  line "P1: VLTC (2m24s+1.12s)" [3181, 3414, 3584, 3598, 3680]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3540 | 45 | 124 | 54% | 3514 | 70% |
|  |  | P1 | 3680 | 64 | 58 | 53% | 3657 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3640 | 55 | 80 | 53% | 3619 | 74% |
|  |  | E1 | 3482 | 51 | 96 | 56% | 3434 | 69% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3353 | 59 | 80 | 53% | 3324 | 54% |
|  |  | E1 | 3101 | 50 | 114 | 53% | 3077 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3598 | 29 | 300 | 54% | 3571 | 68% |
|  |  | E1 | 3440 | 29 | 306 | 52% | 3422 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3519 | 34 | 228 | 50% | 3522 | 62% |
|  |  | E1 | 3347 | 34 | 224 | 50% | 3351 | 60% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3082 | 51 | 112 | 49% | 3092 | 47% |
|  |  | E1 | 2951 | 34 | 276 | 49% | 2957 | 36% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3584 | 46 | 122 | 50% | 3586 | 68% |
|  |  | E1 | 3445 | 31 | 270 | 50% | 3444 | 64% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3471 | 49 | 106 | 56% | 3425 | 69% |
|  |  | E1 | 3340 | 31 | 274 | 49% | 3351 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2880 | 41 | 174 | 53% | 2850 | 45% |
|  |  | P1 | 3071 | 52 | 116 | 57% | 3012 | 38% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.9.5 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3414 | 37 | 196 | 52% | 3401 | 61% |
|  |  | E1 | 3237 | 34 | 244 | 50% | 3239 | 48% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3303 | 50 | 118 | 54% | 3271 | 45% |
|  |  | E1 | 3181 | 41 | 168 | 51% | 3170 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2863 | 41 | 196 | 53% | 2834 | 34% |
|  |  | E1 | 2622 | 36 | 254 | 55% | 2576 | 27% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3067 | 43 | 168 | 55% | 2997 | 43% |
|  |  | P1 | 3181 | 50 | 130 | 55% | 3112 | 40% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3069 | 57 | 116 | 63% | 2786 | 33% |
|  |  | E1 | 2990 | 40 | 218 | 57% | 2842 | 35% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2539 | 62 | 90 | 43% | 2603 | 24% |
|  |  | E1 | 2422 | 46 | 184 | 57% | 2299 | 23% |
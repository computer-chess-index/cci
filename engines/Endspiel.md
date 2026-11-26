# Engine: Endspiel

Author: Thilo Horstmann

Home: https://github.com/thilo11/endspiel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-11-24 | 3005<sub>(+7) | 3351<sub>(+2) | 3425<sub>(+43) |  |
| 2.3.0 | 2026-11-12 | 2998<sub>(-27) | 3349<sub>(+9) | 3382<sub>(-27) |  |
| 2.2.0 | 2026-10-30 | 3025 | 3340 | 3409 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-11-24 | 3055<sub>(-7) | 3259<sub>(-77) | 3453<sub>(+81) |  |
| 2.3.0 | 2026-11-12 | 3062<sub>(-39) | 3336<sub>(-19) | 3372<sub>(-2) |  |
| 2.2.0 | 2026-10-30 | 3101 | 3355 | 3374 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-10-30 | 3101 | 3355 | 3374 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Endspiel+<version>&body=###%20Engine%20name%0AEndspiel%0A%0A###%20Version%0A2.4.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-26 05:38:23

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2.0", "2.3.0", "2.4.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "E1: STC (8.0+0.08s)" [3025, 2998, 3005]
  line "E1: LTC (60.0+0.60s)" [3340, 3349, 3351]
  line "E1: VLTC (2m24s+1.12s)" [3409, 3382, 3425]
  line "P1: STC (8.0+0.08s)" [3101, 3062, 3055]
  line "P1: LTC (60.0+0.60s)" [3355, 3336, 3259]
  line "P1: VLTC (2m24s+1.12s)" [3374, 3372, 3453]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3453 | 85 | 32 | 56% | 3410 | 81% |
|  |  | E1 | 3425 | 42 | 136 | 51% | 3421 | 76% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3259 | 75 | 44 | 52% | 3240 | 68% |
|  |  | E1 | 3351 | 54 | 92 | 48% | 3367 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3005 | 47 | 128 | 50% | 3008 | 53% |
|  |  | P1 | 3055 | 71 | 48 | 51% | 3046 | 73% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3372 | 46 | 136 | 58% | 3186 | 61% |
|  |  | E1 | 3382 | 38 | 188 | 55% | 3303 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3336 | 53 | 104 | 58% | 3162 | 59% |
|  |  | E1 | 3349 | 35 | 217 | 55% | 3289 | 66% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3062 | 39 | 206 | 57% | 2988 | 46% |
|  |  | E1 | 2998 | 37 | 228 | 50% | 2997 | 45% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3409 | 41 | 148 | 50% | 3407 | 70% |
|  |  | P1 | 3374 | 116 | 16 | 50% | 3372 | 88% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3340 | 34 | 224 | 52% | 3325 | 64% |
|  |  | P1 | 3355 | 75 | 44 | 52% | 3340 | 68% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3025 | 36 | 208 | 48% | 3039 | 54% |
|  |  | P1 | 3101 | 49 | 108 | 50% | 3097 | 61% |
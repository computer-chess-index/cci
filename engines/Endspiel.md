# Engine: Endspiel

Author: Thilo Horstmann

Home: https://github.com/thilo11/endspiel

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.4.0 | 2026-11-24 | 3039<sub>(+34) | 3359<sub>(+6) | 3414<sub>(+27) |  |
| 2.3.0 | 2026-11-12 | 3005<sub>(-26) | 3353<sub>(+8) | 3387<sub>(-26) |  |
| 2.2.0 | 2026-10-30 | 3031 | 3345 | 3413 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.3.0 | 2026-11-12 | 3062<sub>(-40) | 3337<sub>(-19) | 3374<sub>(-2) |  |
| 2.2.0 | 2026-10-30 | 3102 | 3356 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.2.0 | 2026-10-30 | 3102 | 3356 | 3376 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Endspiel+<version>&body=###%20Engine%20name%0AEndspiel%0A%0A###%20Version%0A2.3.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-25 05:38:17

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.2.0", "2.3.0", "2.4.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "E1: STC (8.0+0.08s)" [3031, 3005, 3039]
  line "E1: LTC (60.0+0.60s)" [3345, 3353, 3359]
  line "E1: VLTC (2m24s+1.12s)" [3413, 3387, 3414]
  line "P1: STC (8.0+0.08s)" [3102, 3062]
  line "P1: LTC (60.0+0.60s)" [3356, 3337]
  line "P1: VLTC (2m24s+1.12s)" [3376, 3374]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3414 | 84 | 32 | 52% | 3407 | 84% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3359 | 67 | 60 | 48% | 3378 | 58% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3039 | 74 | 48 | 55% | 3002 | 60% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3374 | 46 | 136 | 58% | 3187 | 61% |
|  |  | E1 | 3387 | 38 | 188 | 55% | 3309 | 63% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3353 | 35 | 217 | 55% | 3293 | 66% |
|  |  | P1 | 3337 | 53 | 104 | 58% | 3163 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3005 | 37 | 228 | 50% | 3002 | 45% |
|  |  | P1 | 3062 | 39 | 206 | 57% | 2989 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 2.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3376 | 116 | 16 | 50% | 3374 | 88% |
|  |  | E1 | 3413 | 41 | 148 | 50% | 3411 | 70% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3356 | 75 | 44 | 52% | 3341 | 68% |
|  |  | E1 | 3345 | 34 | 224 | 52% | 3330 | 64% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 3102 | 49 | 108 | 50% | 3098 | 61% |
|  |  | E1 | 3031 | 36 | 208 | 48% | 3044 | 54% |
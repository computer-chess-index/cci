# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3085<sub>(+22) | 3394<sub>(+339) | 3461<sub>(+167) |  |
| 1.0.1 | 2026-07-27 | 3063 | 3055 | 3294 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3301<sub>(+142) | 3552<sub>(+242) | 3607<sub>(+717) |  |
| 1.0.1 | 2026-07-27 | 3159 | 3310 | 2890 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3101<sub>(+23) | 3380<sub>(+98) | 3410<sub>(+51) |  |
| 1.0.1 | 2026-07-27 | 3078<sub>(+1) | 3282<sub>(-21) | 3359<sub>(+4) |  |
| 1.0.0 | 2026-06-30 | 3077 | 3303 | 3355 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ursus+<version>&body=###%20Engine%20name%0AUrsus%0A%0A###%20Version%0A1.1.0" target="_blank">Submit new version</a>

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

Generated: 2026-11-12 05:43:42

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.1", "1.1.0"]
  y-axis "Elo Rating" 2800 --> 3700
  line "E1: STC (8.0+0.08s)" [3063, 3085]
  line "E1: LTC (60.0+0.60s)" [3055, 3394]
  line "E1: VLTC (2m24s+1.12s)" [3294, 3461]
  line "P1: STC (8.0+0.08s)" [3159, 3301]
  line "P1: LTC (60.0+0.60s)" [3310, 3552]
  line "P1: VLTC (2m24s+1.12s)" [2890, 3607]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.0.1", "1.1.0"]
  y-axis "Elo Rating" 3000 --> 3500
  line "T1: STC (8.0+0.08s)" [3077, 3078, 3101]
  line "T1: LTC (60.0+0.60s)" [3303, 3282, 3380]
  line "T1: VLTC (2m24s+1.12s)" [3355, 3359, 3410]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3461 | 30 | 300 | 53% | 3394 | 61% |
|  |  | T1 | 3410 | 38 | 172 | 51% | 3402 | 73% |
|  |  | P1 | 3607 | 43 | 136 | 54% | 3549 | 72% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3394 | 36 | 212 | 54% | 3348 | 63% |
|  |  | T1 | 3380 | 38 | 172 | 50% | 3378 | 69% |
|  |  | P1 | 3552 | 42 | 156 | 57% | 3471 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3085 | 38 | 214 | 57% | 3004 | 41% |
|  |  | T1 | 3101 | 35 | 220 | 48% | 3121 | 57% |
|  |  | P1 | 3301 | 41 | 180 | 49% | 3290 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3294 | 234 | 12 | 96% | 2774 | 8% |
|  |  | T1 | 3359 | 37 | 184 | 48% | 3370 | 68% |
|  |  | P1 | 2890 | 262 | 4 | 100% | 2577 | 0% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3055 | 206 | 8 | 75% | 2646 | 50% |
|  |  | T1 | 3282 | 37 | 184 | 49% | 3285 | 66% |
|  |  | P1 | 3310 | 317 | 4 | 100% | 2909 | 0% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3078 | 46 | 132 | 52% | 3066 | 52% |
|  |  | P1 | 3159 | 178 | 8 | 38% | 3224 | 25% |
|  |  | E1 | 3063 | 162 | 12 | 58% | 2951 | 33% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3355 | 40 | 160 | 55% | 3309 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3303 | 40 | 166 | 55% | 3252 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3077 | 49 | 120 | 55% | 3023 | 53% |
# Engine: Ursus

Author: Zander Chown

Home: https://github.com/zchown/Ursus

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3042<sub>(+46) | 3335<sub>(+107) | 3398<sub>(+5) |  |
| 1.0.1 | 2026-07-27 | 2996 | 3228 | 3393 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1.0 | 2026-08-18 | 3094<sub>(-14) | 3347<sub>(+107) | 3402<sub>(+88) |  |
| 1.0.1 | 2026-07-27 | 3108 | 3240 | 3314 |  |
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

Generated: 2026-11-14 05:43:39

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.1", "1.1.0"]
  y-axis "Elo Rating" 2900 --> 3500
  line "E1: STC (8.0+0.08s)" [2996, 3042]
  line "E1: LTC (60.0+0.60s)" [3228, 3335]
  line "E1: VLTC (2m24s+1.12s)" [3393, 3398]
  line "P1: STC (8.0+0.08s)" [3108, 3094]
  line "P1: LTC (60.0+0.60s)" [3240, 3347]
  line "P1: VLTC (2m24s+1.12s)" [3314, 3402]
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
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3402 | 43 | 136 | 54% | 3345 | 72% |
|  |  | E1 | 3398 | 30 | 304 | 53% | 3337 | 61% |
|  |  | T1 | 3410 | 38 | 172 | 51% | 3402 | 73% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3335 | 35 | 224 | 54% | 3293 | 63% |
|  |  | T1 | 3380 | 38 | 172 | 50% | 3378 | 69% |
|  |  | P1 | 3347 | 42 | 156 | 57% | 3268 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 3042 | 37 | 226 | 57% | 2963 | 41% |
|  |  | T1 | 3101 | 35 | 220 | 48% | 3121 | 57% |
|  |  | P1 | 3094 | 41 | 180 | 49% | 3086 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3393 | 144 | 20 | 75% | 3042 | 30% |
|  |  | T1 | 3359 | 37 | 184 | 48% | 3370 | 68% |
|  |  | P1 | 3314 | 115 | 24 | 69% | 3120 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3228 | 103 | 28 | 68% | 2946 | 57% |
|  |  | T1 | 3282 | 37 | 184 | 49% | 3285 | 66% |
|  |  | P1 | 3240 | 155 | 12 | 75% | 3024 | 50% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2996 | 96 | 32 | 47% | 2969 | 50% |
|  |  | T1 | 3078 | 46 | 132 | 52% | 3066 | 52% |
|  |  | P1 | 3108 | 131 | 16 | 47% | 3136 | 44% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3355 | 40 | 160 | 55% | 3309 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3303 | 40 | 166 | 55% | 3252 | 62% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 3077 | 49 | 120 | 55% | 3023 | 53% |
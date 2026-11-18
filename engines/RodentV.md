# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2921<sub>(+63) | 3240<sub>(+19) | 3314<sub>(+16) |  |
| 1.0 | 2026-08-02 | 2858 | 3221 | 3298 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2925<sub>(+94) | 3218<sub>(+45) | 3275<sub>(-6) |  |
| 1.0 | 2026-08-02 | 2831 | 3173 | 3281 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1 <sub>(i5-7500T 2.70GHz)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2992<sub>(+50) | 3260<sub>(+56) | 3308<sub>(+14) |  |
| 1.0 | 2026-08-02 | 2942 | 3204 | 3294 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+RodentV+<version>&body=###%20Engine%20name%0ARodentV%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

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

Generated: 2026-11-18 05:42:46

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2858, 2921]
  line "E1: LTC (60.0+0.60s)" [3221, 3240]
  line "E1: VLTC (2m24s+1.12s)" [3298, 3314]
  line "P1: STC (8.0+0.08s)" [2831, 2925]
  line "P1: LTC (60.0+0.60s)" [3173, 3218]
  line "P1: VLTC (2m24s+1.12s)" [3281, 3275]
```



## Ratings Verlauf T1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2900 --> 3400
  line "T1: STC (8.0+0.08s)" [2942, 2992]
  line "T1: LTC (60.0+0.60s)" [3204, 3260]
  line "T1: VLTC (2m24s+1.12s)" [3294, 3308]
```





## Detailed Evaluation Results

| Version | Time Control | Variant | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3314 | 25 | 400 | 48% | 3328 | 66% |
|  |  | T1 | 3308 | 29 | 292 | 50% | 3308 | 71% |
|  |  | P1 | 3275 | 31 | 276 | 49% | 3285 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3260 | 27 | 374 | 53% | 3237 | 61% |
|  |  | P1 | 3218 | 31 | 288 | 49% | 3227 | 59% |
|  |  | E1 | 3240 | 25 | 420 | 48% | 3256 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2992 | 27 | 404 | 53% | 2946 | 49% |
|  |  | P1 | 2925 | 31 | 298 | 49% | 2934 | 49% |
|  |  | E1 | 2921 | 26 | 442 | 45% | 2966 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3294 | 33 | 250 | 49% | 3297 | 61% |
|  |  | P1 | 3281 | 85 | 44 | 73% | 3074 | 50% |
|  |  | E1 | 3298 | 56 | 96 | 57% | 3117 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3204 | 32 | 260 | 51% | 3195 | 57% |
|  |  | P1 | 3173 | 74 | 52 | 54% | 3102 | 54% |
|  |  | E1 | 3221 | 60 | 84 | 57% | 3114 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2942 | 37 | 224 | 53% | 2913 | 43% |
|  |  | P1 | 2831 | 73 | 60 | 59% | 2750 | 35% |
|  |  | E1 | 2858 | 60 | 88 | 53% | 2793 | 42% |
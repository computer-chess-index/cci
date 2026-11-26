# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2919<sub>(+72) | 3235<sub>(+15) | 3312<sub>(+11) |  |
| 1.0 | 2026-08-02 | 2847 | 3220 | 3301 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2954<sub>(+70) | 3241<sub>(+23) | 3297<sub>(-4) |  |
| 1.0 | 2026-08-02 | 2884 | 3218 | 3301 |  |
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

Generated: 2026-11-26 05:42:45

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2847, 2919]
  line "E1: LTC (60.0+0.60s)" [3220, 3235]
  line "E1: VLTC (2m24s+1.12s)" [3301, 3312]
  line "P1: STC (8.0+0.08s)" [2884, 2954]
  line "P1: LTC (60.0+0.60s)" [3218, 3241]
  line "P1: VLTC (2m24s+1.12s)" [3301, 3297]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3297 | 30 | 296 | 49% | 3308 | 63% |
|  |  | E1 | 3312 | 25 | 412 | 48% | 3328 | 66% |
|  |  | T1 | 3308 | 29 | 292 | 50% | 3308 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3241 | 29 | 316 | 49% | 3252 | 59% |
|  |  | E1 | 3235 | 24 | 456 | 48% | 3252 | 60% |
|  |  | T1 | 3260 | 27 | 374 | 53% | 3237 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2919 | 25 | 490 | 45% | 2965 | 47% |
|  |  | T1 | 2992 | 27 | 404 | 53% | 2946 | 49% |
|  |  | P1 | 2954 | 30 | 334 | 49% | 2961 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3301 | 52 | 108 | 57% | 3135 | 56% |
|  |  | T1 | 3294 | 33 | 250 | 49% | 3297 | 61% |
|  |  | P1 | 3301 | 68 | 64 | 65% | 3164 | 55% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3220 | 46 | 140 | 54% | 3156 | 49% |
|  |  | T1 | 3204 | 32 | 260 | 51% | 3195 | 57% |
|  |  | P1 | 3218 | 58 | 84 | 54% | 3166 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2847 | 47 | 144 | 51% | 2811 | 40% |
|  |  | T1 | 2942 | 37 | 224 | 53% | 2913 | 43% |
|  |  | P1 | 2884 | 56 | 100 | 59% | 2809 | 39% |
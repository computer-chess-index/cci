# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2927<sub>(+74) | 3248<sub>(+17) | 3318<sub>(+15) |  |
| 1.0 | 2026-08-02 | 2853 | 3231 | 3303 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2916<sub>(+126) | 3210<sub>(+23) | 3270<sub>(+2) |  |
| 1.0 | 2026-08-02 | 2790 | 3187 | 3268 |  |
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

Generated: 2026-11-16 05:42:12

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2853, 2927]
  line "E1: LTC (60.0+0.60s)" [3231, 3248]
  line "E1: VLTC (2m24s+1.12s)" [3303, 3318]
  line "P1: STC (8.0+0.08s)" [2790, 2916]
  line "P1: LTC (60.0+0.60s)" [3187, 3210]
  line "P1: VLTC (2m24s+1.12s)" [3268, 3270]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3318 | 26 | 392 | 48% | 3332 | 66% |
|  |  | T1 | 3308 | 29 | 292 | 50% | 3308 | 71% |
|  |  | P1 | 3270 | 31 | 268 | 49% | 3278 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3260 | 27 | 374 | 53% | 3237 | 61% |
|  |  | P1 | 3210 | 31 | 280 | 49% | 3218 | 59% |
|  |  | E1 | 3248 | 26 | 404 | 48% | 3260 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2992 | 27 | 404 | 53% | 2946 | 49% |
|  |  | P1 | 2916 | 31 | 294 | 49% | 2921 | 49% |
|  |  | E1 | 2927 | 26 | 426 | 45% | 2969 | 47% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3294 | 33 | 250 | 49% | 3297 | 61% |
|  |  | P1 | 3268 | 99 | 36 | 78% | 3020 | 39% |
|  |  | E1 | 3303 | 62 | 80 | 59% | 3087 | 50% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3204 | 32 | 260 | 51% | 3195 | 57% |
|  |  | P1 | 3187 | 91 | 36 | 63% | 3032 | 53% |
|  |  | E1 | 3231 | 64 | 76 | 59% | 3108 | 46% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2942 | 37 | 224 | 53% | 2913 | 43% |
|  |  | P1 | 2790 | 85 | 44 | 59% | 2711 | 36% |
|  |  | E1 | 2853 | 61 | 84 | 52% | 2796 | 42% |
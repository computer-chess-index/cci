# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2921<sub>(+62) | 3240<sub>(+19) | 3313<sub>(+15) |  |
| 1.0 | 2026-08-02 | 2859 | 3221 | 3298 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2946<sub>(+92) | 3232<sub>(+10) | 3286<sub>(-4) |  |
| 1.0 | 2026-08-02 | 2854 | 3222 | 3290 |  |
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

Generated: 2026-11-23 05:42:21

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2859, 2921]
  line "E1: LTC (60.0+0.60s)" [3221, 3240]
  line "E1: VLTC (2m24s+1.12s)" [3298, 3313]
  line "P1: STC (8.0+0.08s)" [2854, 2946]
  line "P1: LTC (60.0+0.60s)" [3222, 3232]
  line "P1: VLTC (2m24s+1.12s)" [3290, 3286]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3308 | 29 | 292 | 50% | 3308 | 71% |
|  |  | P1 | 3286 | 30 | 292 | 49% | 3297 | 62% |
|  |  | E1 | 3313 | 25 | 412 | 48% | 3329 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3260 | 27 | 374 | 53% | 3237 | 61% |
|  |  | P1 | 3232 | 31 | 288 | 49% | 3241 | 59% |
|  |  | E1 | 3240 | 25 | 428 | 48% | 3255 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2992 | 27 | 404 | 53% | 2946 | 49% |
|  |  | P1 | 2946 | 30 | 318 | 49% | 2951 | 48% |
|  |  | E1 | 2921 | 25 | 478 | 45% | 2967 | 46% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3294 | 33 | 250 | 49% | 3297 | 61% |
|  |  | P1 | 3290 | 76 | 52 | 68% | 3123 | 56% |
|  |  | E1 | 3298 | 56 | 96 | 57% | 3116 | 54% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3204 | 32 | 260 | 51% | 3195 | 57% |
|  |  | P1 | 3222 | 63 | 72 | 56% | 3144 | 57% |
|  |  | E1 | 3221 | 60 | 84 | 57% | 3116 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2942 | 37 | 224 | 53% | 2913 | 43% |
|  |  | P1 | 2854 | 60 | 84 | 58% | 2786 | 42% |
|  |  | E1 | 2859 | 59 | 88 | 53% | 2795 | 42% |
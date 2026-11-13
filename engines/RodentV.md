# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2897<sub>(+144) | 3224<sub>(+81) | 3299<sub>(+12) |  |
| 1.0 | 2026-08-02 | 2753 | 3143 | 3287 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2943<sub>(+364) | 3260<sub>(+146) | 3326<sub>(+279) |  |
| 1.0 | 2026-08-02 | 2579 | 3114 | 3047 |  |
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

Generated: 2026-11-13 05:42:20

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2500 --> 3400
  line "E1: STC (8.0+0.08s)" [2753, 2897]
  line "E1: LTC (60.0+0.60s)" [3143, 3224]
  line "E1: VLTC (2m24s+1.12s)" [3287, 3299]
  line "P1: STC (8.0+0.08s)" [2579, 2943]
  line "P1: LTC (60.0+0.60s)" [3114, 3260]
  line "P1: VLTC (2m24s+1.12s)" [3047, 3326]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3326 | 32 | 260 | 50% | 3326 | 62% |
|  |  | E1 | 3299 | 27 | 368 | 49% | 3309 | 66% |
|  |  | T1 | 3308 | 29 | 292 | 50% | 3308 | 71% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3260 | 31 | 272 | 49% | 3266 | 60% |
|  |  | E1 | 3224 | 26 | 400 | 48% | 3237 | 61% |
|  |  | T1 | 3260 | 27 | 374 | 53% | 3237 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2943 | 32 | 286 | 50% | 2943 | 50% |
|  |  | E1 | 2897 | 27 | 418 | 45% | 2943 | 48% |
|  |  | T1 | 2992 | 27 | 404 | 53% | 2946 | 49% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | P1 | 3047 | 160 | 12 | 79% | 2822 | 42% |
|  |  | E1 | 3287 | 164 | 24 | 85% | 2542 | 13% |
|  |  | T1 | 3294 | 33 | 250 | 49% | 3297 | 61% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3143 | 101 | 32 | 63% | 2951 | 44% |
|  |  | T1 | 3204 | 32 | 260 | 51% | 3195 | 57% |
|  |  | P1 | 3114 | 177 | 12 | 75% | 2799 | 33% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2753 | 104 | 36 | 49% | 2707 | 19% |
|  |  | T1 | 2942 | 37 | 224 | 53% | 2913 | 43% |
|  |  | P1 | 2579 | 141 | 16 | 47% | 2618 | 19% |
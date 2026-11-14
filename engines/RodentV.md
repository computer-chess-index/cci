# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2915<sub>(+53) | 3236<sub>(+43) | 3309<sub>(+7) |  |
| 1.0 | 2026-08-02 | 2862 | 3193 | 3302 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2911<sub>(+152) | 3222<sub>(+94) | 3289<sub>(+142) |  |
| 1.0 | 2026-08-02 | 2759 | 3128 | 3147 |  |
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

Generated: 2026-11-14 05:41:54

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2700 --> 3400
  line "E1: STC (8.0+0.08s)" [2862, 2915]
  line "E1: LTC (60.0+0.60s)" [3193, 3236]
  line "E1: VLTC (2m24s+1.12s)" [3302, 3309]
  line "P1: STC (8.0+0.08s)" [2759, 2911]
  line "P1: LTC (60.0+0.60s)" [3128, 3222]
  line "P1: VLTC (2m24s+1.12s)" [3147, 3289]
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
|  |  | P1 | 3289 | 32 | 260 | 50% | 3289 | 62% |
|  |  | E1 | 3309 | 26 | 372 | 48% | 3320 | 66% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3260 | 27 | 374 | 53% | 3237 | 61% |
|  |  | P1 | 3222 | 31 | 272 | 49% | 3228 | 60% |
|  |  | E1 | 3236 | 26 | 404 | 48% | 3248 | 61% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2992 | 27 | 404 | 53% | 2946 | 49% |
|  |  | P1 | 2911 | 32 | 290 | 49% | 2915 | 49% |
|  |  | E1 | 2915 | 27 | 418 | 45% | 2962 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | T1 | 3294 | 33 | 250 | 49% | 3297 | 61% |
|  |  | P1 | 3147 | 131 | 20 | 78% | 2913 | 35% |
|  |  | E1 | 3302 | 88 | 48 | 67% | 2931 | 38% |
|  | LTC <sub>(60.0+0.60s)</sub> | P1 | 3128 | 129 | 20 | 65% | 2939 | 40% |
|  |  | E1 | 3193 | 82 | 48 | 60% | 3033 | 46% |
|  |  | T1 | 3204 | 32 | 260 | 51% | 3195 | 57% |
|  | STC <sub>(8.0+0.08s)</sub> | P1 | 2759 | 110 | 28 | 63% | 2654 | 25% |
|  |  | E1 | 2862 | 83 | 52 | 56% | 2755 | 23% |
|  |  | T1 | 2942 | 37 | 224 | 53% | 2913 | 43% |
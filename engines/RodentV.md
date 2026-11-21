# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1 <sub>(Ultra 7 265T (1.50 GHz) - E-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2920<sub>(+62) | 3237<sub>(+17) | 3313<sub>(+16) |  |
| 1.0 | 2026-08-02 | 2858 | 3220 | 3297 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1 <sub>(Ultra 7 265T (1.50 GHz) - P-Core)</sub>

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2938<sub>(+89) | 3225<sub>(+9) | 3279<sub>(-3) |  |
| 1.0 | 2026-08-02 | 2849 | 3216 | 3282 |  |
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

Generated: 2026-11-21 05:42:09

## Ratings Verlauf E1 / P1

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2800 --> 3400
  line "E1: STC (8.0+0.08s)" [2858, 2920]
  line "E1: LTC (60.0+0.60s)" [3220, 3237]
  line "E1: VLTC (2m24s+1.12s)" [3297, 3313]
  line "P1: STC (8.0+0.08s)" [2849, 2938]
  line "P1: LTC (60.0+0.60s)" [3216, 3225]
  line "P1: VLTC (2m24s+1.12s)" [3282, 3279]
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
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3313 | 25 | 408 | 48% | 3328 | 65% |
|  |  | T1 | 3308 | 29 | 292 | 50% | 3308 | 71% |
|  |  | P1 | 3279 | 30 | 288 | 49% | 3290 | 62% |
|  | LTC <sub>(60.0+0.60s)</sub> | E1 | 3237 | 25 | 424 | 48% | 3255 | 61% |
|  |  | T1 | 3260 | 27 | 374 | 53% | 3237 | 61% |
|  |  | P1 | 3225 | 31 | 288 | 49% | 3235 | 59% |
|  | STC <sub>(8.0+0.08s)</sub> | E1 | 2920 | 26 | 454 | 45% | 2969 | 46% |
|  |  | T1 | 2992 | 27 | 404 | 53% | 2946 | 49% |
|  |  | P1 | 2938 | 30 | 314 | 49% | 2946 | 48% |
| --- | --- |--- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | E1 | 3297 | 56 | 96 | 57% | 3116 | 54% |
|  |  | T1 | 3294 | 33 | 250 | 49% | 3297 | 61% |
|  |  | P1 | 3282 | 76 | 52 | 68% | 3114 | 56% |
|  | LTC <sub>(60.0+0.60s)</sub> | T1 | 3204 | 32 | 260 | 51% | 3195 | 57% |
|  |  | P1 | 3216 | 62 | 72 | 56% | 3137 | 57% |
|  |  | E1 | 3220 | 60 | 84 | 57% | 3114 | 48% |
|  | STC <sub>(8.0+0.08s)</sub> | T1 | 2942 | 37 | 224 | 53% | 2913 | 43% |
|  |  | P1 | 2849 | 60 | 84 | 58% | 2781 | 42% |
|  |  | E1 | 2858 | 59 | 88 | 53% | 2793 | 42% |
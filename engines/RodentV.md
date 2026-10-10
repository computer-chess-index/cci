# Engine: RodentV

Author: Pawel Koziol

Home: https://github.com/nescitus/Rodent-V

## Elo Ratings E1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 2832 | 3175 | 3243 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings P1

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-08-06 | 3120 | 3440 | 3502 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

## Elo Ratings T1

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

Generated: 2026-10-10 04:42:09

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 2900 --> 3400
  line "" [2942, 2992]
  line "STC (8.0+0.08s)" [2942, 2992]
  line "LTC (60.0+0.60s)" [3204, 3260]
  line "" [3294, 3308]
  line "VLTC (2m24s+1.12s)" [3294, 3308]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3308 | 29 | 292 | 50% | 3308 | 71% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3502 | 39 | 172 | 51% | 3494 | 64% |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 3243 | 33 | 244 | 48% | 3258 | 66% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3260 | 27 | 374 | 53% | 3237 | 61% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3440 | 39 | 180 | 50% | 3443 | 57% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 3175 | 33 | 248 | 48% | 3189 | 59% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2992 | 27 | 404 | 53% | 2946 | 49% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 3120 | 36 | 224 | 51% | 3109 | 50% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2832 | 32 | 286 | 42% | 2900 | 51% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3294 | 33 | 250 | 49% | 3297 | 61% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 3204 | 32 | 260 | 51% | 3195 | 57% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2942 | 37 | 224 | 53% | 2913 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
# Engine: Onyx

Author: Dylan Hogarth

Home: https://github.com/dylan2554/onyx

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-07-12 | 2896<sub>(+262) | 3163<sub>(+224) | 3232<sub>(+204) |  |
| 1.6 | 2026-06-13 | 2634 | 2939 | 3028 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onyx+<version>&body=###%20Engine%20name%0AOnyx%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-25 04:40:46

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.6", "2.0"]
  y-axis "Elo Rating" 2600 --> 3300
  line "" [2634, 2896]
  line "STC (8.0+0.08s)" [2634, 2896]
  line "LTC (60.0+0.60s)" [2939, 3163]
  line "" [3028, 3232]
  line "VLTC (2m24s+1.12s)" [3028, 3232]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3232 | 29 | 328 | 50% | 3232 | 58% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3163 | 29 | 346 | 50% | 3163 | 51% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2896 | 29 | 366 | 49% | 2903 | 40% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.6 | VLTC <sub>(2m24s+1.12s)</sub> | 3028 | 32 | 296 | 48% | 3043 | 40% |
| 1.6 | LTC <sub>(60.0+0.60s)</sub> | 2939 | 34 | 264 | 46% | 2971 | 41% |
| 1.6 | STC <sub>(8.0+0.08s)</sub> | 2634 | 34 | 276 | 50% | 2639 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
# Engine: Ceylondemon

Author: Madushan Bhashana Dissanayake

Home: https://github.com/Madushan996/CeylonDemon2.0

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 3.3 | 2026-09-26 | 2994<sub>(+360) | 3225<sub>(+175) | 3297<sub>(+162) |  |
| 2.0 | 2026-08-28 | 2634 | 3050 | 3135 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ceylondemon+<version>&body=###%20Engine%20name%0ACeylondemon%0A%0A###%20Version%0A3.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-02 04:36:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "3.3"]
  y-axis "Elo Rating" 2600 --> 3300
  line "" [2634, 2994]
  line "STC (8.0+0.08s)" [2634, 2994]
  line "LTC (60.0+0.60s)" [3050, 3225]
  line "" [3135, 3297]
  line "VLTC (2m24s+1.12s)" [3135, 3297]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 3297 | 41 | 162 | 52% | 3274 | 59% |
| 3.3 | LTC <sub>(60.0+0.60s)</sub> | 3225 | 42 | 156 | 52% | 3212 | 53% |
| 3.3 | STC <sub>(8.0+0.08s)</sub> | 2994 | 51 | 120 | 57% | 2932 | 43% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3135 | 29 | 360 | 54% | 3093 | 49% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3050 | 31 | 312 | 52% | 3023 | 48% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2634 | 31 | 348 | 48% | 2649 | 28% |
| --- | --- | --- | --- | --- | --- | --- | --- |
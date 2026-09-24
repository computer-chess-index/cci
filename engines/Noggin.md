# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2643<sub>(+40) | 2890<sub>(+55) | 2946<sub>(+6) |  |
| 2.0 | 2026-06-14 | 2603<sub>(+new) | 2835<sub>(+new) | 2940<sub>(+new) |  |
| 1.0 | 2026-06-09 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Noggin+<version>&body=###%20Engine%20name%0ANoggin%0A%0A###%20Version%0A2.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:40:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2600 --> 3000
  line "" [2603, 2643]
  line "STC (8.0+0.08s)" [2603, 2643]
  line "LTC (60.0+0.60s)" [2835, 2890]
  line "" [2940, 2946]
  line "VLTC (2m24s+1.12s)" [2940, 2946]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 34 | 256 | 52% | 2932 | 45% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2890 | 37 | 220 | 52% | 2876 | 43% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2643 | 39 | 216 | 48% | 2658 | 30% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2940 | 49 | 128 | 56% | 2893 | 41% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2835 | 56 | 92 | 51% | 2823 | 46% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2603 | 52 | 124 | 44% | 2660 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
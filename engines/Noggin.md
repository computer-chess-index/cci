# Engine: Noggin

Author: Jeremy Lim

Home: https://github.com/jeremyylimmm/noggin

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.1 | 2026-07-04 | 2653<sub>(+56) | 2880<sub>(+49) | 2946<sub>(+11) |  |
| 2.0 | 2026-06-14 | 2597<sub>(+new) | 2831<sub>(+new) | 2935<sub>(+new) |  |
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

Generated: 2026-09-06 04:36:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["2.0", "2.1"]
  y-axis "Elo Rating" 2500 --> 3000
  line "" [2597, 2653]
  line "STC (8.0+0.08s)" [2597, 2653]
  line "LTC (60.0+0.60s)" [2831, 2880]
  line "" [2935, 2946]
  line "VLTC (2m24s+1.12s)" [2935, 2946]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2946 | 35 | 240 | 53% | 2924 | 45% |
| 2.1 | LTC <sub>(60.0+0.60s)</sub> | 2880 | 39 | 192 | 51% | 2867 | 43% |
| 2.1 | STC <sub>(8.0+0.08s)</sub> | 2653 | 41 | 196 | 49% | 2657 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2935 | 49 | 128 | 56% | 2888 | 41% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 2831 | 56 | 92 | 51% | 2817 | 46% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2597 | 52 | 124 | 44% | 2654 | 31% |
| --- | --- | --- | --- | --- | --- | --- | --- |
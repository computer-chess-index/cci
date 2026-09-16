# Engine: Onslaught

Author: Kai Chung

Home: https://github.com/kachhy/Onslaught

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0 | 2026-09-12 | 2997<sub>(+450) | 3237<sub>(+429) | 3299<sub>(+376) |  |
| 1.0 | 2026-06-02 | 2547 | 2808 | 2923 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Onslaught+<version>&body=###%20Engine%20name%0AOnslaught%0A%0A###%20Version%0A2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-16 04:40:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "2.0"]
  y-axis "Elo Rating" 2500 --> 3300
  line "" [2547, 2997]
  line "STC (8.0+0.08s)" [2547, 2997]
  line "LTC (60.0+0.60s)" [2808, 3237]
  line "" [2923, 3299]
  line "VLTC (2m24s+1.12s)" [2923, 3299]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3299 | 33 | 248 | 53% | 3274 | 65% |
| 2.0 | LTC <sub>(60.0+0.60s)</sub> | 3237 | 30 | 294 | 53% | 3213 | 61% |
| 2.0 | STC <sub>(8.0+0.08s)</sub> | 2997 | 37 | 222 | 51% | 2982 | 44% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2923 | 29 | 364 | 51% | 2916 | 45% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2808 | 31 | 324 | 51% | 2792 | 43% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 2547 | 30 | 372 | 50% | 2543 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
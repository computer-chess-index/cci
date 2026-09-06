# Engine: Ember

Author: Daniel Krețu

Home: https://github.com/ExxDreamerCode/Ember

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-08-28 | 2626<sub>(+new) | 2961<sub>(+new) | 3032<sub>(+new) |  |
| 1.2.0 | 2026-07-30 |  |  |  |  |
| 1.1.2 | 2026-07-08 | 2349<sub>(+new) | 2789<sub>(+new) | 2866<sub>(+new) |  |
| 1.1.1 | 2026-07-04 |  |  |  |  |
| 1.1.0 | 2026-06-26 |  |  |  |  |
| 1.0.0 | 2026-06-17 |  |  |  |  |
| 0.9.5 | 2026-06-14 |  |  |  |  |
| 0.9.4 | 2026-06-04 |  |  |  |  |
| 0.9.3 | 2026-06-03 |  |  |  |  |
| 0.9.2 | 2026-06-01 |  |  |  |  |
| 0.9.1 | 2026-05-31 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ember+<version>&body=###%20Engine%20name%0AEmber%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:24:11

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.1.2", "1.3.0"]
  y-axis "Elo Rating" 2300 --> 3100
  line "" [2349, 2626]
  line "STC (8.0+0.08s)" [2349, 2626]
  line "LTC (60.0+0.60s)" [2789, 2961]
  line "" [2866, 3032]
  line "VLTC (2m24s+1.12s)" [2866, 3032]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 3032 | 36 | 220 | 50% | 3031 | 51% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2961 | 33 | 264 | 53% | 2932 | 46% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2626 | 37 | 240 | 52% | 2607 | 33% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2866 | 31 | 330 | 50% | 2861 | 41% |
| 1.1.2 | LTC <sub>(60.0+0.60s)</sub> | 2789 | 31 | 332 | 51% | 2766 | 38% |
| 1.1.2 | STC <sub>(8.0+0.08s)</sub> | 2349 | 33 | 316 | 49% | 2353 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
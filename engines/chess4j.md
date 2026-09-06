# Engine: chess4j

Author: James Swafford

Home: https://github.com/jswaff/chess4j

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 6.3 | 2026-06-06 | 1868<sub>(+13) | 2196<sub>(-14) | 2298<sub>(0) |  |
| 6.2 | 2025-09-16 | 1855 | 2210 | 2298 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+chess4j+<version>&body=###%20Engine%20name%0Achess4j%0A%0A###%20Version%0A6.3" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:23:17

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["6.2", "6.3"]
  y-axis "Elo Rating" 1800 --> 2300
  line "" [1855, 1868]
  line "STC (8.0+0.08s)" [1855, 1868]
  line "LTC (60.0+0.60s)" [2210, 2196]
  line "" [2298, 2298]
  line "VLTC (2m24s+1.12s)" [2298, 2298]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.3 | VLTC <sub>(2m24s+1.12s)</sub> | 2298 | 30 | 372 | 50% | 2298 | 30% |
| 6.3 | LTC <sub>(60.0+0.60s)</sub> | 2196 | 32 | 334 | 52% | 2175 | 23% |
| 6.3 | STC <sub>(8.0+0.08s)</sub> | 1868 | 29 | 422 | 48% | 1883 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 6.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2298 | 27 | 468 | 49% | 2307 | 30% |
| 6.2 | LTC <sub>(60.0+0.60s)</sub> | 2210 | 27 | 452 | 50% | 2202 | 28% |
| 6.2 | STC <sub>(8.0+0.08s)</sub> | 1855 | 25 | 584 | 51% | 1843 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
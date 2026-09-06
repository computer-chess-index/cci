# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2199<sub>(+new) | 2488<sub>(+new) | 2593<sub>(+new) |  |
| 0.5.0 | 2026-08-29 |  |  |  |  |
| 0.4.0 | 2026-08-16 | 1958<sub>(+new) | 2248<sub>(+new) | 2336<sub>(+new) |  |
| 0.3.0 | 2026-08-15 |  |  |  |  |
| 0.2.0 | 2026-08-14 |  |  |  |  |
| 0.1.0 | 2026-08-12 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ariadne+<version>&body=###%20Engine%20name%0AAriadne%0A%0A###%20Version%0A0.6.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-06 06:22:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1900 --> 2600
  line "" [1958, 2199]
  line "STC (8.0+0.08s)" [1958, 2199]
  line "LTC (60.0+0.60s)" [2248, 2488]
  line "" [2336, 2593]
  line "VLTC (2m24s+1.12s)" [2336, 2593]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2593 | 37 | 228 | 51% | 2583 | 36% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2488 | 37 | 244 | 49% | 2500 | 31% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2199 | 34 | 296 | 46% | 2230 | 25% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2336 | 34 | 296 | 51% | 2327 | 25% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2248 | 35 | 280 | 50% | 2246 | 23% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1958 | 37 | 256 | 50% | 1956 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
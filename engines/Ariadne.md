# Engine: Ariadne

Author: Liam Galvin

Home: https://github.com/liamg/ariadne

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.6.0 | 2026-08-29 | 2203<sub>(+new) | 2493<sub>(+new) | 2607<sub>(+new) |  |
| 0.5.0 | 2026-08-29 |  |  |  |  |
| 0.4.0 | 2026-08-16 | 1963<sub>(+new) | 2255<sub>(+new) | 2341<sub>(+new) |  |
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

Generated: 2026-10-09 04:35:56

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.4.0", "0.6.0"]
  y-axis "Elo Rating" 1900 --> 2700
  line "" [1963, 2203]
  line "STC (8.0+0.08s)" [1963, 2203]
  line "LTC (60.0+0.60s)" [2255, 2493]
  line "" [2341, 2607]
  line "VLTC (2m24s+1.12s)" [2341, 2607]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2607 | 35 | 264 | 51% | 2593 | 34% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 2493 | 35 | 264 | 48% | 2515 | 31% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 2203 | 34 | 308 | 46% | 2237 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2341 | 34 | 296 | 51% | 2333 | 25% |
| 0.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2255 | 35 | 280 | 50% | 2253 | 23% |
| 0.4.0 | STC <sub>(8.0+0.08s)</sub> | 1963 | 37 | 256 | 50% | 1962 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
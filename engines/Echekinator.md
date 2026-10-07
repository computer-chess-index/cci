# Engine: Echekinator

Author: 

Home: https://github.com/Tym972/Echekinator

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.1 | 2026-09-30 | 2167<sub>(+394) | 2348<sub>(+288) | 2418<sub>(+263) |  |
| 1.0 | 2025-11-25 | 1773 | 2060 | 2155 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Echekinator+<version>&body=###%20Engine%20name%0AEchekinator%0A%0A###%20Version%0A1.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-07 04:37:59

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0", "1.1"]
  y-axis "Elo Rating" 1700 --> 2500
  line "" [1773, 2167]
  line "STC (8.0+0.08s)" [1773, 2167]
  line "LTC (60.0+0.60s)" [2060, 2348]
  line "" [2155, 2418]
  line "VLTC (2m24s+1.12s)" [2155, 2418]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2418 | 46 | 160 | 54% | 2372 | 28% |
| 1.1 | LTC <sub>(60.0+0.60s)</sub> | 2348 | 51 | 132 | 53% | 2321 | 27% |
| 1.1 | STC <sub>(8.0+0.08s)</sub> | 2167 | 52 | 136 | 56% | 2097 | 21% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2155 | 26 | 544 | 47% | 2194 | 24% |
| 1.0 | LTC <sub>(60.0+0.60s)</sub> | 2060 | 23 | 684 | 51% | 2048 | 24% |
| 1.0 | STC <sub>(8.0+0.08s)</sub> | 1773 | 22 | 796 | 48% | 1789 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
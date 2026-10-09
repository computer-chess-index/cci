# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1866<sub>(-54) | 2145<sub>(+3) | 2241<sub>(+23) |  |
| 0.0.76 | 2026-01-05 | 1920 | 2142 | 2218 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Fktb+<version>&body=###%20Engine%20name%0AFktb%0A%0A###%20Version%0A0.0.77" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-10-09 04:38:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "" [1920, 1866]
  line "STC (8.0+0.08s)" [1920, 1866]
  line "LTC (60.0+0.60s)" [2142, 2145]
  line "" [2218, 2241]
  line "VLTC (2m24s+1.12s)" [2218, 2241]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.77 | VLTC <sub>(2m24s+1.12s)</sub> | 2241 | 24 | 580 | 52% | 2221 | 31% |
| 0.0.77 | LTC <sub>(60.0+0.60s)</sub> | 2145 | 25 | 536 | 49% | 2153 | 29% |
| 0.0.77 | STC <sub>(8.0+0.08s)</sub> | 1866 | 22 | 740 | 50% | 1856 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | 2218 | 52 | 132 | 48% | 2245 | 22% |
| 0.0.76 | LTC <sub>(60.0+0.60s)</sub> | 2142 | 45 | 172 | 49% | 2152 | 23% |
| 0.0.76 | STC <sub>(8.0+0.08s)</sub> | 1920 | 49 | 140 | 48% | 1939 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
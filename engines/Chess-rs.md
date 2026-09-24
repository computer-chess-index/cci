# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1698<sub>(+16) | 1928<sub>(+64) | 2026<sub>(+39) |  |
| 0.6.0 | 2025-11-11 | 1682<sub>(+97) | 1864<sub>(+67) | 1987<sub>(+94) |  |
| 0.5.0 | 2025-11-03 | 1585 | 1797 | 1893 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chess-rs+<version>&body=###%20Engine%20name%0AChess-rs%0A%0A###%20Version%0A0.7.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-09-24 04:36:55

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "" [1585, 1682, 1698]
  line "STC (8.0+0.08s)" [1585, 1682, 1698]
  line "LTC (60.0+0.60s)" [1797, 1864, 1928]
  line "" [1893, 1987, 2026]
  line "VLTC (2m24s+1.12s)" [1893, 1987, 2026]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2026 | 24 | 644 | 48% | 2040 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1928 | 23 | 650 | 49% | 1933 | 22% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1698 | 22 | 754 | 50% | 1696 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1987 | 44 | 184 | 49% | 1995 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1864 | 50 | 146 | 50% | 1867 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1682 | 54 | 124 | 50% | 1681 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1893 | 49 | 148 | 49% | 1902 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1797 | 46 | 176 | 47% | 1832 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1585 | 49 | 156 | 47% | 1613 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
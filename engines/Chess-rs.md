# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1696<sub>(+15) | 1925<sub>(+63) | 2024<sub>(+39) |  |
| 0.6.0 | 2025-11-11 | 1681<sub>(+99) | 1862<sub>(+68) | 1985<sub>(+94) |  |
| 0.5.0 | 2025-11-03 | 1582 | 1794 | 1891 |  |
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

Generated: 2026-09-16 04:36:51

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "" [1582, 1681, 1696]
  line "STC (8.0+0.08s)" [1582, 1681, 1696]
  line "LTC (60.0+0.60s)" [1794, 1862, 1925]
  line "" [1891, 1985, 2024]
  line "VLTC (2m24s+1.12s)" [1891, 1985, 2024]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2024 | 24 | 644 | 48% | 2037 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1925 | 23 | 650 | 49% | 1931 | 22% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1696 | 22 | 754 | 50% | 1693 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1985 | 44 | 184 | 49% | 1994 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1862 | 50 | 146 | 50% | 1864 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1681 | 54 | 124 | 50% | 1679 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1891 | 49 | 148 | 49% | 1899 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1794 | 46 | 176 | 47% | 1829 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1582 | 49 | 156 | 47% | 1611 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
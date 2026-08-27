# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1690<sub>(+11) | 1918<sub>(+58) | 2021<sub>(+39) |  |
| 0.6.0 | 2025-11-11 | 1679<sub>(+98) | 1860<sub>(+67) | 1982<sub>(+93) |  |
| 0.5.0 | 2025-11-03 | 1581 | 1793 | 1889 |  |
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

Generated: 2026-08-27 07:33:19

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "" [1581, 1679, 1690]
  line "STC (8.0+0.08s)" [1581, 1679, 1690]
  line "LTC (60.0+0.60s)" [1793, 1860, 1918]
  line "" [1889, 1982, 2021]
  line "VLTC (2m24s+1.12s)" [1889, 1982, 2021]
```





## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2021 | 24 | 616 | 48% | 2036 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1918 | 24 | 622 | 49% | 1928 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1690 | 23 | 710 | 49% | 1689 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1982 | 44 | 184 | 49% | 1991 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1860 | 50 | 146 | 50% | 1863 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1679 | 54 | 124 | 50% | 1678 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1889 | 49 | 148 | 49% | 1898 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1793 | 46 | 176 | 47% | 1828 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1581 | 49 | 156 | 47% | 1609 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
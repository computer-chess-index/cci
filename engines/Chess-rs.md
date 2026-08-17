# Engine: Chess-rs

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.7.0 | 2025-12-31 | 1679<sub>(+9) | 1912<sub>(+60) | 2013<sub>(+39) |  |
| 0.6.0 | 2025-11-11 | 1670<sub>(+97) | 1852<sub>(+67) | 1974<sub>(+93) |  |
| 0.5.0 | 2025-11-03 | 1573 | 1785 | 1881 |  |
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

Generated: 2026-08-17 06:23:44

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.5.0", "0.6.0", "0.7.0"]
  y-axis "Elo Rating" 1500 --> 2100
  line "STC (8.0+0.08s)" [1573, 1670, 1679]
  line "STC (8.0+0.08s)" [1573, 1670, 1679]
  line "LTC (60.0+0.60s)" [1785, 1852, 1912]
  line "VLTC (2m24s+1.12s)" [1881, 1974, 2013]
  line "VLTC (2m24s+1.12s)" [1881, 1974, 2013]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.7.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2013 | 25 | 588 | 48% | 2026 | 21% |
| 0.7.0 | LTC <sub>(60.0+0.60s)</sub> | 1912 | 24 | 606 | 49% | 1918 | 23% |
| 0.7.0 | STC <sub>(8.0+0.08s)</sub> | 1679 | 23 | 686 | 49% | 1681 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.6.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1974 | 44 | 184 | 49% | 1983 | 21% |
| 0.6.0 | LTC <sub>(60.0+0.60s)</sub> | 1852 | 50 | 146 | 50% | 1855 | 21% |
| 0.6.0 | STC <sub>(8.0+0.08s)</sub> | 1670 | 54 | 124 | 50% | 1669 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.5.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1881 | 49 | 148 | 49% | 1890 | 20% |
| 0.5.0 | LTC <sub>(60.0+0.60s)</sub> | 1785 | 46 | 176 | 47% | 1818 | 18% |
| 0.5.0 | STC <sub>(8.0+0.08s)</sub> | 1573 | 49 | 156 | 47% | 1601 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 2.0.0 | 2026-05-23 |  |  |  |  |
| 1.2.0 | 2026-05-07 | 1895<sub>(+174) | 2159<sub>(+158) | 2226<sub>(+140) |  |
| 1.1.0 | 2026-04-21 | 1721<sub>(+79) | 2001<sub>(+126) | 2086<sub>(+142) |  |
| 1.0.0 | 2026-02-20 | 1642<sub>(+103) | 1875<sub>(+77) | 1944<sub>(+88) |  |
| 0.9.0 | 2026-01-21 | 1539 | 1798 | 1856 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A2.0.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-08 06:27:28

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1539, 1642, 1721, 1895]
  line "STC (8.0+0.08s)" [1539, 1642, 1721, 1895]
  line "LTC (60.0+0.60s)" [1798, 1875, 2001, 2159]
  line "VLTC (2m24s+1.12s)" [1856, 1944, 2086, 2226]
  line "VLTC (2m24s+1.12s)" [1856, 1944, 2086, 2226]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2226 | 31 | 348 | 51% | 2219 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2159 | 35 | 280 | 50% | 2148 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1895 | 32 | 344 | 52% | 1871 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2086 | 32 | 348 | 53% | 2059 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2001 | 33 | 326 | 51% | 1990 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1721 | 32 | 352 | 50% | 1709 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1944 | 29 | 390 | 50% | 1945 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1875 | 31 | 384 | 51% | 1868 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1642 | 30 | 394 | 48% | 1659 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1856 | 41 | 208 | 50% | 1862 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1798 | 36 | 280 | 53% | 1769 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1539 | 39 | 242 | 49% | 1547 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
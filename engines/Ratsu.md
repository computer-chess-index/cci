# Engine: Ratsu

Author: Eetu Rantala

Home: https://github.com/ranzuh/ratsu

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.2.0 | 2026-05-07 | 1910<sub>(+171) | 2176<sub>(+156) | 2222<sub>(+117) |  |
| 1.1.0 | 2026-04-21 | 1739<sub>(+80) | 2020<sub>(+126) | 2105<sub>(+141) |  |
| 1.0.0 | 2026-02-20 | 1659<sub>(+104) | 1894<sub>(+77) | 1964<sub>(+89) |  |
| 0.9.0 | 2026-01-21 | 1555 | 1817 | 1875 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Ratsu+<version>&body=###%20Engine%20name%0ARatsu%0A%0A###%20Version%0A1.2.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-05-19 06:28:13

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.9.0", "1.0.0", "1.1.0", "1.2.0"]
  y-axis "Elo Rating" 1500 --> 2300
  line "STC (8.0+0.08s)" [1555, 1659, 1739, 1910]
  line "STC (8.0+0.08s)" [1555, 1659, 1739, 1910]
  line "LTC (60.0+0.60s)" [1817, 1894, 2020, 2176]
  line "VLTC (2m24s+1.12s)" [1875, 1964, 2105, 2222]
  line "VLTC (2m24s+1.12s)" [1875, 1964, 2105, 2222]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2222 | 33 | 316 | 49% | 2237 | 26% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2176 | 37 | 252 | 50% | 2168 | 27% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1910 | 34 | 312 | 51% | 1894 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2105 | 32 | 348 | 53% | 2078 | 26% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2020 | 33 | 326 | 51% | 2010 | 20% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1739 | 32 | 352 | 50% | 1727 | 22% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1964 | 29 | 390 | 50% | 1966 | 27% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1894 | 31 | 384 | 51% | 1887 | 18% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1659 | 30 | 394 | 48% | 1677 | 23% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.9.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1875 | 41 | 208 | 50% | 1881 | 25% |
| 0.9.0 | LTC <sub>(60.0+0.60s)</sub> | 1817 | 36 | 280 | 53% | 1787 | 17% |
| 0.9.0 | STC <sub>(8.0+0.08s)</sub> | 1555 | 39 | 242 | 49% | 1563 | 18% |
| --- | --- | --- | --- | --- | --- | --- | --- |
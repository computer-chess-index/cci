# Engine: PurplePanda

Author: Jakob Steininger

Home: https://github.com/Jakob256/PurplePanda

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 21 | 2026-07-12 | 1700<sub>(+57) | 1993<sub>(+85) | 2083<sub>(+105) |  |
| 20 | 2025-12-15 | 1643 | 1908 | 1978 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+PurplePanda+<version>&body=###%20Engine%20name%0APurplePanda%0A%0A###%20Version%0A21" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-21 06:29:20

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["20", "21"]
  y-axis "Elo Rating" 1600 --> 2100
  line "STC (8.0+0.08s)" [1643, 1700]
  line "STC (8.0+0.08s)" [1643, 1700]
  line "LTC (60.0+0.60s)" [1908, 1993]
  line "VLTC (2m24s+1.12s)" [1978, 2083]
  line "VLTC (2m24s+1.12s)" [1978, 2083]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 21 | VLTC <sub>(2m24s+1.12s)</sub> | 2083 | 37 | 270 | 49% | 2094 | 17% |
| 21 | LTC <sub>(60.0+0.60s)</sub> | 1993 | 37 | 264 | 48% | 2028 | 19% |
| 21 | STC <sub>(8.0+0.08s)</sub> | 1700 | 38 | 264 | 51% | 1696 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | VLTC <sub>(2m24s+1.12s)</sub> | 1978 | 25 | 566 | 48% | 2007 | 21% |
| 20 | LTC <sub>(60.0+0.60s)</sub> | 1908 | 25 | 580 | 50% | 1913 | 17% |
| 20 | STC <sub>(8.0+0.08s)</sub> | 1643 | 25 | 640 | 47% | 1671 | 16% |
| --- | --- | --- | --- | --- | --- | --- | --- |
# Engine: Fktb

Author: Landon Peng

Home: https://github.com/lunbun/fktb

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 0.0.77 | 2026-01-18 | 1848<sub>(-57) | 2132<sub>(+6) | 2218<sub>(+15) |  |
| 0.0.76 | 2026-01-05 | 1905 | 2126 | 2203 |  |
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

Generated: 2026-08-02 06:24:52

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["0.0.76", "0.0.77"]
  y-axis "Elo Rating" 1800 --> 2300
  line "STC (8.0+0.08s)" [1905, 1848]
  line "STC (8.0+0.08s)" [1905, 1848]
  line "LTC (60.0+0.60s)" [2126, 2132]
  line "VLTC (2m24s+1.12s)" [2203, 2218]
  line "VLTC (2m24s+1.12s)" [2203, 2218]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.77 | VLTC <sub>(2m24s+1.12s)</sub> | 2218 | 25 | 536 | 52% | 2201 | 31% |
| 0.0.77 | LTC <sub>(60.0+0.60s)</sub> | 2132 | 26 | 496 | 49% | 2138 | 29% |
| 0.0.77 | STC <sub>(8.0+0.08s)</sub> | 1848 | 23 | 648 | 50% | 1851 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 0.0.76 | VLTC <sub>(2m24s+1.12s)</sub> | 2203 | 52 | 132 | 48% | 2230 | 22% |
| 0.0.76 | LTC <sub>(60.0+0.60s)</sub> | 2126 | 45 | 172 | 49% | 2137 | 23% |
| 0.0.76 | STC <sub>(8.0+0.08s)</sub> | 1905 | 49 | 140 | 48% | 1922 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
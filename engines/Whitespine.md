# Engine: Whitespine

Author: Miloslav Macůrek

Home: https://github.com/maelic13/whitespine

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.0 | 2026-04-29 | 711<sub>(-146) | 909<sub>(-109) | 1026<sub>(+3) |  |
| 1.3.3 | 2026-03-26 | 857<sub>(+73) | 1018<sub>(-40) | 1023<sub>(-18) |  |
| 1.3.2 | 2025-09-16 | 784 | 1058 | 1041 |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Whitespine+<version>&body=###%20Engine%20name%0AWhitespine%0A%0A###%20Version%0A1.4.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-18 06:33:07

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.3.2", "1.3.3", "1.4.0"]
  y-axis "Elo Rating" 700 --> 1100
  line "STC (8.0+0.08s)" [784, 857, 711]
  line "STC (8.0+0.08s)" [784, 857, 711]
  line "LTC (60.0+0.60s)" [1058, 1018, 909]
  line "VLTC (2m24s+1.12s)" [1041, 1023, 1026]
  line "VLTC (2m24s+1.12s)" [1041, 1023, 1026]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 1026 | 58 | 162 | 52% | 940 | 14% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 909 | 58 | 166 | 52% | 867 | 10% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 711 | 57 | 158 | 44% | 811 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.3 | VLTC <sub>(2m24s+1.12s)</sub> | 1023 | 62 | 140 | 49% | 986 | 13% |
| 1.3.3 | LTC <sub>(60.0+0.60s)</sub> | 1018 | 64 | 136 | 46% | 1007 | 12% |
| 1.3.3 | STC <sub>(8.0+0.08s)</sub> | 857 | 72 | 116 | 42% | 936 | 10% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 1041 | 75 | 106 | 44% | 1160 | 13% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 1058 | 85 | 92 | 42% | 1185 | 12% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 784 | 102 | 76 | 37% | 1056 | 11% |
| --- | --- | --- | --- | --- | --- | --- | --- |
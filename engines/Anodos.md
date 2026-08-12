# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2142<sub>(+156) | 2412<sub>(+118) | 2479<sub>(+103) |  |
| 1.2.0 | 2026-02-01 | 1986<sub>(+193) | 2294<sub>(+273) | 2376<sub>(+235) |  |
| 1.1.0 | 2026-01-16 | 1793<sub>(+54) | 2021<sub>(+65) | 2141<sub>(+125) |  |
| 1.0.0 | 2026-01-02 | 1739 | 1956 | 2016 | Previously: chess-rs |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Anodos+<version>&body=###%20Engine%20name%0AAnodos%0A%0A###%20Version%0A1.3.0" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-08-12 06:23:00

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1739, 1793, 1986, 2142]
  line "STC (8.0+0.08s)" [1739, 1793, 1986, 2142]
  line "LTC (60.0+0.60s)" [1956, 2021, 2294, 2412]
  line "VLTC (2m24s+1.12s)" [2016, 2141, 2376, 2479]
  line "VLTC (2m24s+1.12s)" [2016, 2141, 2376, 2479]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2479 | 27 | 466 | 49% | 2488 | 26% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2412 | 27 | 472 | 51% | 2407 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2142 | 25 | 572 | 49% | 2148 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2376 | 38 | 244 | 52% | 2356 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2294 | 41 | 196 | 49% | 2303 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1986 | 45 | 176 | 52% | 1968 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2141 | 37 | 256 | 51% | 2129 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2021 | 44 | 180 | 50% | 2018 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1793 | 40 | 228 | 50% | 1797 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2016 | 45 | 192 | 44% | 2111 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1956 | 49 | 156 | 48% | 1955 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1739 | 45 | 180 | 46% | 1787 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
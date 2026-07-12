# Engine: Anodos

Author: Tom Cant

Home: https://github.com/tomcant/chess-rs

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.3.0 | 2026-02-16 | 2141<sub>(+154) | 2421<sub>(+122) | 2488<sub>(+107) |  |
| 1.2.0 | 2026-02-01 | 1987<sub>(+193) | 2299<sub>(+277) | 2381<sub>(+237) |  |
| 1.1.0 | 2026-01-16 | 1794<sub>(+55) | 2022<sub>(+64) | 2144<sub>(+127) |  |
| 1.0.0 | 2026-01-02 | 1739<sub>(+new) | 1958<sub>(+new) | 2017<sub>(+new) | Previously: chess-rs |
| 0.7.0 | 2025-12-31 |  |  |  |  |
| 0.6.0 | 2025-11-11 |  |  |  |  |
| 0.5.1 | 2025-11-04 |  |  |  |  |
| 0.5.0 | 2025-11-03 |  |  |  |  |
| 0.4.2 | 2025-10-13 |  |  |  |  |
| 0.4.1 | 2025-10-09 |  |  |  |  |
| 0.4.0 | 2025-10-09 |  |  |  |  |
| 0.3.0 | 2025-10-05 |  |  |  |  |
| 0.2.0 | 2023-03-12 |  |  |  |  |
| 0.1.1 | 2022-12-03 |  |  |  |  |
| 0.1.0 | 2022-12-03 |  |  |  |  |
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

Generated: 2026-07-12 06:22:38

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1739, 1794, 1987, 2141]
  line "STC (8.0+0.08s)" [1739, 1794, 1987, 2141]
  line "LTC (60.0+0.60s)" [1958, 2022, 2299, 2421]
  line "VLTC (2m24s+1.12s)" [2017, 2144, 2381, 2488]
  line "VLTC (2m24s+1.12s)" [2017, 2144, 2381, 2488]
```

```mermaid
%%{init: {"theme":"base"}}%%
flowchart LR
E[ ] --- A[STC 8.0+0.08s]
A --- B[LTC 60.0+0.60s]
B --- C[VLTC 2m24s+1.12s]
C --- D[ ]
linkStyle 0 stroke:#a3a3a3,stroke-width:0px
linkStyle 1 stroke:#a3a3a3,stroke-width:4px
linkStyle 2 stroke:#faa371,stroke-width:4px
linkStyle 3 stroke:#4ef781,stroke-width:4px
style A fill:none,stroke:none
style B fill:none,stroke:none
style C fill:none,stroke:none
style D fill:none,stroke:none
style E fill:none,stroke:none
```


## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.0.0", "1.1.0", "1.2.0", "1.3.0"]
  y-axis "Elo Rating" 1700 --> 2500
  line "STC (8.0+0.08s)" [1739, 1794, 1987, 2141]
  line "STC (8.0+0.08s)" [1739, 1794, 1987, 2141]
  line "LTC (60.0+0.60s)" [1958, 2022, 2299, 2421]
  line "VLTC (2m24s+1.12s)" [2017, 2144, 2381, 2488]
  line "VLTC (2m24s+1.12s)" [2017, 2144, 2381, 2488]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2488 | 28 | 430 | 49% | 2493 | 25% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2421 | 28 | 432 | 51% | 2410 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 2141 | 25 | 540 | 49% | 2149 | 24% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2381 | 38 | 244 | 52% | 2361 | 25% |
| 1.2.0 | LTC <sub>(60.0+0.60s)</sub> | 2299 | 41 | 196 | 49% | 2307 | 28% |
| 1.2.0 | STC <sub>(8.0+0.08s)</sub> | 1987 | 45 | 176 | 52% | 1970 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2144 | 37 | 256 | 51% | 2130 | 22% |
| 1.1.0 | LTC <sub>(60.0+0.60s)</sub> | 2022 | 44 | 180 | 50% | 2020 | 22% |
| 1.1.0 | STC <sub>(8.0+0.08s)</sub> | 1794 | 40 | 228 | 50% | 1798 | 17% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.0.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2017 | 45 | 192 | 44% | 2114 | 18% |
| 1.0.0 | LTC <sub>(60.0+0.60s)</sub> | 1958 | 49 | 156 | 48% | 1956 | 17% |
| 1.0.0 | STC <sub>(8.0+0.08s)</sub> | 1739 | 45 | 180 | 46% | 1789 | 20% |
| --- | --- | --- | --- | --- | --- | --- | --- |
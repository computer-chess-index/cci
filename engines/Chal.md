# Engine: Chal

Author: Naman Thanki

Home: https://github.com/namanthanki/chal

## Elo Ratings

| Version | Published | STC <sub>8.0+0.08s  | LTC <sub>60.0+0.60s | VLTC <sub>2m24s+1.12s | Comment |
| --- | --- | --- | --- | --- | --- |
| 1.4.1 | 2026-04-26 | 2291<sub>(+41) | 2565<sub>(+82) | 2628<sub>(+55) |  |
| 1.4.0 | 2026-04-01 | 2250<sub>(+214) | 2483<sub>(+133) | 2573<sub>(+197) |  |
| 1.3.2 | 2026-03-14 | 2036<sub>(+27) | 2350<sub>(+25) | 2376<sub>(+3) |  |
| 1.3.1 | 2026-03-10 | 2009<sub>(+151) | 2325<sub>(+114) | 2373<sub>(+135) |  |
| 1.3.0 | 2026-03-08 | 1858<sub>(+185) | 2211<sub>(+307) | 2238<sub>(+237) |  |
| 1.2.1 | 2026-03-07 | 1673<sub>(+new) | 1904<sub>(+new) | 2001<sub>(+new) |  |
| 1.2.0 | 2026-03-05 |  |  |  |  |
| 1.1.0 | 2026-03-05 |  |  |  |  |
| 1.0.0 | 2026-03-05 |  |  |  |  |
 | | | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | cElo <sub>(∆ prev) | 

<a href="https://github.com/computer-chess-index/cci/issues/new?template=submit-version.yml&title=[VERSION]+Chal+<version>&body=###%20Engine%20name%0AChal%0A%0A###%20Version%0A1.4.1" target="_blank">Submit new version</a>

 Test Conditions:

GUI/CLI: <a href=https://github.com/cutechess/cutechess target="_blank">Cute-Chess</a><br>
Elo Calculation: <a href=https://www.remi-coulom.fr/Bayesian-Elo/ target="_blank">Bayesian-Elo</a><br>
CPU: Intel(R) Core(TM) i5-7500T 2.70GHz<br>
Opening book: 8_moves_v3<br>
\* STC: 8.0+0.08s, LTC: 60.0+0.60s, VLTC: 2m24s+1.12s

 Lists:
Ratings: <a href=https://github.com/computer-chess-index/cci/blob/main/lists/CCIRatings.csv target="_blank">Complete list</a>

Generated: 2026-06-27 06:23:21

## Ratings Verlauf

```mermaid
%%{init: {"theme":"base","themeVariables":{"seriesColors:['#a3a3a3','#222221','#faa371']}}}%%
xychart-beta
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1673, 1858, 2009, 2036, 2250, 2291]
  line "STC (8.0+0.08s)" [1673, 1858, 2009, 2036, 2250, 2291]
  line "LTC (60.0+0.60s)" [1904, 2211, 2325, 2350, 2483, 2565]
  line "VLTC (2m24s+1.12s)" [2001, 2238, 2373, 2376, 2573, 2628]
  line "VLTC (2m24s+1.12s)" [2001, 2238, 2373, 2376, 2573, 2628]
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
  x-axis ["1.2.1", "1.3.0", "1.3.1", "1.3.2", "1.4.0", "1.4.1"]
  y-axis "Elo Rating" 1600 --> 2700
  line "STC (8.0+0.08s)" [1673, 1858, 2009, 2036, 2250, 2291]
  line "STC (8.0+0.08s)" [1673, 1858, 2009, 2036, 2250, 2291]
  line "LTC (60.0+0.60s)" [1904, 2211, 2325, 2350, 2483, 2565]
  line "VLTC (2m24s+1.12s)" [2001, 2238, 2373, 2376, 2573, 2628]
  line "VLTC (2m24s+1.12s)" [2001, 2238, 2373, 2376, 2573, 2628]
```

<p>⬛ STC (8.0+0.08s) &nbsp;&nbsp; 🟧 LTC (60.0+0.60s) &nbsp;&nbsp; 🟩 VLTC (2m24s+1.12s)</p>
<p>dark mode: 🟩STC (8.0+0.08s) 🟧LTC (60.0+0.60s) ⬜VLTC (2m24s+1.12s)</p>




## Detailed Evaluation Results

| Version | Time Control | Elo  | Range +/- | Matches | Score | Average Opponent Elo | Draws |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2628 | 28 | 396 | 51% | 2618 | 36% |
| 1.4.1 | LTC <sub>(60.0+0.60s)</sub> | 2565 | 28 | 404 | 51% | 2553 | 34% |
| 1.4.1 | STC <sub>(8.0+0.08s)</sub> | 2291 | 30 | 372 | 49% | 2296 | 27% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.4.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2573 | 30 | 360 | 50% | 2572 | 33% |
| 1.4.0 | LTC <sub>(60.0+0.60s)</sub> | 2483 | 32 | 320 | 49% | 2488 | 31% |
| 1.4.0 | STC <sub>(8.0+0.08s)</sub> | 2250 | 31 | 360 | 52% | 2233 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.2 | VLTC <sub>(2m24s+1.12s)</sub> | 2376 | 34 | 296 | 49% | 2385 | 28% |
| 1.3.2 | LTC <sub>(60.0+0.60s)</sub> | 2350 | 32 | 312 | 51% | 2345 | 33% |
| 1.3.2 | STC <sub>(8.0+0.08s)</sub> | 2036 | 32 | 320 | 48% | 2055 | 29% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2373 | 37 | 244 | 51% | 2360 | 27% |
| 1.3.1 | LTC <sub>(60.0+0.60s)</sub> | 2325 | 37 | 240 | 51% | 2317 | 29% |
| 1.3.1 | STC <sub>(8.0+0.08s)</sub> | 2009 | 40 | 212 | 52% | 1994 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.3.0 | VLTC <sub>(2m24s+1.12s)</sub> | 2238 | 44 | 188 | 54% | 2203 | 21% |
| 1.3.0 | LTC <sub>(60.0+0.60s)</sub> | 2211 | 41 | 204 | 55% | 2168 | 27% |
| 1.3.0 | STC <sub>(8.0+0.08s)</sub> | 1858 | 42 | 196 | 50% | 1858 | 26% |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1.2.1 | VLTC <sub>(2m24s+1.12s)</sub> | 2001 | 39 | 254 | 50% | 2010 | 15% |
| 1.2.1 | LTC <sub>(60.0+0.60s)</sub> | 1904 | 45 | 192 | 46% | 1974 | 16% |
| 1.2.1 | STC <sub>(8.0+0.08s)</sub> | 1673 | 44 | 200 | 47% | 1746 | 19% |
| --- | --- | --- | --- | --- | --- | --- | --- |